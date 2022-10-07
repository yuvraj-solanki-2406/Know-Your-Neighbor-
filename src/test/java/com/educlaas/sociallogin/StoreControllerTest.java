package com.educlaas.sociallogin;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.educlaas.sociallogin.controller.StoreController;
import com.educlaas.sociallogin.dao.Stores;
import com.educlaas.sociallogin.repository.StoreRepository;
import com.educlaas.sociallogin.service.StoreService;

@SpringBootTest
public class StoreControllerTest {
	
	@Autowired
	StoreService storeService;
	
	@Autowired
	StoreController storeController;
	
	@MockBean
	StoreRepository storeRepository;

	@Test 
	void addStore() {
		Stores store = new Stores();
		store.setStorename("Mechanical Works");
		store.setStoreaddress("City garden Delhi");
		store.setStoretype("Hardwares");
		
		Mockito.when(storeRepository.save(store)).thenReturn(store);
		String response = storeService.addStore(store);
		
		Assert.assertEquals(response, "Store Added successfully");
	}
	
	@Test
	void viewAllUsers() {
		
		List<Stores> stores = new ArrayList<>();
		
		Stores store = new Stores();
		store.setStorename("krishna Sweets");
		store.setStoreaddress("Backingum street London");
		store.setStoretype("Sweets");
		
		stores.add(store);
		Mockito.when(storeRepository.findAll()).thenReturn(stores);

		List<Stores> viewStore = storeService.getAllStores();
		
		Assert.assertEquals(1, viewStore.size());
		
	}
	
	@Test
	void searchStoreByName() {
		String storename= "yuvraj";
		when(storeRepository.searchStore(storename))
							.thenReturn(Stream.of(new Stores(89, "yuvraj", "bhopal","grocery"))
							.collect(Collectors.toList()));
		
		assertEquals(1, storeService.searchStores(storename).size());
	}
	
	@Test
	void searchStoreByType() {
		String storename= "yuvraj";
		when(storeRepository.searchStore(storename))
							.thenReturn(Stream.of(new Stores(75, "rohan", "Delhi","Electronics"))
							.collect(Collectors.toList()));
		
		assertEquals(1, storeService.searchStores(storename).size());
	}

}
