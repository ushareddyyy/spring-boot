package com.mru.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mru.service.MRUService;
import com.mru.entity.Laptops;
import java.util.List;
import com.mru.entity.Mobiles;
import com.mru.entity.Watches;
@RestController
@CrossOrigin("*")
public class MRUController {
	@Autowired
	private MRUService service;
	@GetMapping("/laptops")
	
	public List<Laptops> getLaptops(){
		return service.getAllLaptops();		
	}
	@GetMapping("/mobiles")
	public List<Mobiles> getMobiles(){
		return service.getAllMobiles();		
	}
	@GetMapping("/watches")
	public List<Watches> getWatches(){
	    return service.getAllWatches();		
	}

	

}
