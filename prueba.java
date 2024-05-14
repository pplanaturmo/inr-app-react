

private static final String[] WHITE_LIST_URL = { "/api/v1/auth/**",
                        "/v2/api-docs",
                        "/v3/api-docs",
                        "/v3/api-docs/**",
                        "/swagger-resources",
                        "/swagger-resources/**",
                        "/configuration/ui",
                        "/configuration/security",
                        "/swagger-ui/**",
                        "/webjars/**",
                        "/swagger-ui.html",
                        "/api/user/create" };
        private final JwtAuthFilter jwtAuthFilter;
        private final AuthenticationProvider authenticationProvider;
        private final LogoutHandler logoutHandler;
        private final BCryptPasswordEncoder bCryptPasswordEncoder;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws
        Exception {
        http
        .csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests (authorizeHttpRequests ->
    authorizeHttpRequests
        //.requestMatchers("/**").hasRole("USER")
    .requestMatchers("/api/auth/login/**",
        "/v2/api-docs",
        "/v3/api-docs",
        "/v3/api-docs/**",
        "/swagger-resources",
        "/swagger-resources/**",
        "/configuration/ui",
        "/configuration/security",
        "/swagger-ui/**",
        "/webjars/**",
        "/swagger-ui.html").permitAll()
        .anyRequest().authenticated()
        )

        // .authorizeHttpRequests(req -> req.requestMatchers(WHITE_LIST_URL))
        // .authorizeHttpRequests("/api/v1/auth/**",
        //                 "/v2/api-docs",
        //                 "/v3/api-docs",
        //                 "/v3/api-docs/**",
        //                 "/swagger-resources",
        //                 "/swagger-resources/**",
        //                 "/configuration/ui",
        //                 "/configuration/security",
        //                 "/swagger-ui/**",
        //                 "/webjars/**",
        //                 "/swagger-ui.html",
        //                 "/api/user/create" )

        .permitAll()
        // .requestMatchers("/api/v1/management/**")
        // .hasAnyRole(ADMIN.name(), MANAGER.name())
        // .requestMatchers(GET, "/api/v1/management/**")
        // .hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
        // .requestMatchers(POST, "/api/v1/management/**")
        // .hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
        // .requestMatchers(PUT, "/api/v1/management/**")
        // .hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
        // .requestMatchers(DELETE, "/api/v1/management/**")
        // .hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())
        and().anyRequest()
        .authenticated()
        .sessionManagement(session -> session
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        .logout(logout -> logout.logoutUrl("/api/v1/auth/logout")
        .addLogoutHandler(logoutHandler)
        .logoutSuccessHandler(
        (request, response,
        authentication) -> SecurityContextHolder
        .clearContext()));

        return http.build();
        }