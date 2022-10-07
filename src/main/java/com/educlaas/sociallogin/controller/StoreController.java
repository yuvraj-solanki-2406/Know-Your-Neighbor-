package com.educlaas.sociallogin.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.sociallogin.dao.Stores;
import com.educlaas.sociallogin.service.StoreService;


@RestController
@RequestMapping(value = "/online")
public class StoreController {

	@Autowired
	private StoreService storeService;
	
	
	@GetMapping(value = "/viewallstores")
	public List<Stores> getAllStores(){
		return storeService.getAllStores();
	}
		
	@PostMapping(value = "/addstore")
	public void addStore(@RequestBody Stores stores) {
		storeService.addStore(stores);
	}
	
	@GetMapping(value = "/search/{keyword}")
	public List<Stores>searchStore(@PathVariable("keyword") String keyword){
		List<Stores> list = storeService.searchStores(keyword);
		System.out.println(list);
		return list;
	}

}
