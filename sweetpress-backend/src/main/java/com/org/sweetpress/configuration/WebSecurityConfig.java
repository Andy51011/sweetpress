//package com.org.sweetpress.configuration;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.web.servlet.config.annotation.ViewControllerRegistration;
//
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig {
//
//    public void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable().authorizeRequests()
//                .antMatchers("/").permitAll()
//                .antMatchers(HttpMethod.GET, "/order-items").permitAll()
//                .anyRequest().authenticated();
//    }
//}

