package com.walace.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.walace.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
