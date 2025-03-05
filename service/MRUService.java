package com.mru.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mru.repo.MRURepo;
import com.mru.entity.Laptops;
@Service
public class MRUService {
	@Autowired
	private MRURepo repo;
	public List<Laptops> getAllLaptops(){
		return repo.findAll();
	}

}
