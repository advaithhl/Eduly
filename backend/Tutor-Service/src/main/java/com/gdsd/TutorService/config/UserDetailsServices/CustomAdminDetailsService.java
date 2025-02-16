package com.gdsd.TutorService.config.UserDetailsServices;

import com.gdsd.TutorService.model.Admin;
import com.gdsd.TutorService.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
@Service
public class CustomAdminDetailsService implements UserDetailsService {
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
        Admin admin = adminRepository.findByEmailId(emailId)
                .orElseThrow(() -> new UsernameNotFoundException("Admin not found with email: " + emailId));

        return new User(admin.getEmailId(), admin.getPassword(), Collections.emptyList());
    }
}
