package com.educlaas.sociallogin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.educlaas.sociallogin.dao.Stores;

@Repository
public interface StoreRepository extends JpaRepository<Stores, Integer>{

	@Query(value = "select s from Stores s where storename like '%' || :keyword || '%' "
			+ "OR storetype like '%' || :keyword || '%'")
	
	public List<Stores> searchStore(@Param("keyword")String keyword );
}
