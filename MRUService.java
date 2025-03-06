package com.mru.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mru.repo.MRURepo;
import com.mru.entity.Laptops;
import com.mru.repo.MobilesRepo;
import com.mru.entity.Mobiles;
@Service
public class MRUService {
	@Autowired
	private MRURepo repo;
	@Autowired
	private MobilesRepo repo1;
	public List<Laptops> getAllLaptops(){
		return repo.findAll();
	}
	public List<Mobiles> getAllMobiles(){
		return repo1.findAll();
	}

}
