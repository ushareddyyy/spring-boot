package com.mru.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mru.entity.Laptops;
import com.mru.entity.Mobiles;
import com.mru.entity.User;
import com.mru.entity.Watches;
import com.mru.repo.LaptopsRepo;
import com.mru.repo.MobilesRepo;
import com.mru.repo.UserRepo;
import com.mru.repo.WatchesRepo;
@Service
public class MRUService {
	@Autowired
	private LaptopsRepo repo1;
	@Autowired
	private MobilesRepo repo2;
	@Autowired
	private WatchesRepo repo3;
	@Autowired
	private UserRepo userRepo;
	
	public List<Laptops> getAllLaptops(){
		return repo1.findAll();
	}
	public List<Mobiles> getAllMobiles(){
		return repo2.findAll();
	}
	public List<Watches> getAllWatches(){
		return repo3.findAll();
	}
	
	 // Register User
    public String registerUser(User user) {
        if (userRepo.findByUsername(user.getUsername()).isPresent()) {
            return "Username already exists!";
        }
        userRepo.save(user);
        return "User registered successfully!";
    }

    // Login User
    public String loginUser(String username, String password) {
     	Optional<User> existingUser = userRepo.findByUsername(username);
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(password)) {
            return "Login successful!";
        }
        return "Invalid username or password";
    }
	
}
