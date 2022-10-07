package com.educlaas.sociallogin.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Stores")
public class Stores {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int storeId;
	
	@Column(nullable = false)
	private String storename;
	
	@Column(nullable = false)
	private String storeaddress;
	
	@Column(nullable = false)
	private String storetype;
	
	public Stores(){
		
	}

	public int getStoreId() {
		return storeId;
	}

	public void setStoreId(int storeId) {
		this.storeId = storeId;
	}

	public String getStorename() {
		return storename;
	}

	public void setStorename(String storename) {
		this.storename = storename;
	}

	public String getStoreaddress() {
		return storeaddress;
	}

	public void setStoreaddress(String storeaddress) {
		this.storeaddress = storeaddress;
	}

	public String getStoretype() {
		return storetype;
	}

	public void setStoretype(String storetype) {
		this.storetype = storetype;
	}

	public Stores(int storeId, String storename, String storeaddress, String storetype) {
		super();
		this.storeId = storeId;
		this.storename = storename;
		this.storeaddress = storeaddress;
		this.storetype = storetype;
	}

	@Override
	public String toString() {
		return "Stores [storeId=" + storeId + ", storename=" + storename + ", storeaddress=" + storeaddress
				+ ", storetype=" + storetype + "]";
	}
	
}
