package com.educlaas.sociallogin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.educlaas.sociallogin.dao.Stores;
import com.educlaas.sociallogin.repository.StoreRepository;


@Service
public class StoreService {

	@Autowired
	private StoreRepository storeRepository;

	public String addStore(Stores stores) {
		storeRepository.save(stores);
		System.out.println(stores);
		return "Store Added successfully";
	}
	
	public List<Stores> getAllStores() {
		List<Stores> stores = storeRepository.findAll();
		return stores;
	}
	
	public List<Stores> searchStores(String keyword){
		List<Stores> list = storeRepository.searchStore(keyword);
		return list;
	}
}
