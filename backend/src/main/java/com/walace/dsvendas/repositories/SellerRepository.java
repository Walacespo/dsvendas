package com.walace.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.walace.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
