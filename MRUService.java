package com.mru.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mru.repo.MRURepo;
import com.mru.entity.Laptops;
import com.mru.repo.MobilesRepo;
import com.mru.entity.Mobiles;
import com.mru.entity.Watches;
import com.mru.repo.WatchesRepo;
@Service
public class MRUService {
	@Autowired
	private MRURepo repo;
	@Autowired
	private MobilesRepo repo1;
	@Autowired
	private WatchesRepo repo2;
	
	public List<Laptops> getAllLaptops(){
		return repo.findAll();
	}
	public List<Mobiles> getAllMobiles(){
		return repo1.findAll();
	}
	
	public List<Watches> getAllWatches(){
		return repo2.findAll();
	}

}
