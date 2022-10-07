package com.educlaas.sociallogin;

import org.junit.jupiter.api.Test;
import org.junit.Assert;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.educlaas.sociallogin.controller.StoreController;
import com.educlaas.sociallogin.dao.Stores;
import com.educlaas.sociallogin.repository.StoreRepository;
import com.educlaas.sociallogin.service.StoreService;


@SpringBootTest
class Bdse03LocalGoogleFacebookLoginApplicationTests {
	
	@Autowired
	StoreService storeService;
	
	@Autowired
	StoreController storeController;
	
	@MockBean
	StoreRepository storeRepository;

	
	@Test 
	void addStore() {
		Stores store = new Stores();
		store.setStorename("krishna Sweets");
		store.setStoreaddress("Backingum street London");
		store.setStoretype("Sweets");
		
		Mockito.when(storeRepository.save(store)).thenReturn(store);
		String response = storeService.addStore(store);
		
		Assert.assertEquals(response, "Store Added successfully");
	}

}
