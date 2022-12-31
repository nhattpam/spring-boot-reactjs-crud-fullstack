package com.nhattpam.springbootreacjscrud.repository;

import com.nhattpam.springbootreacjscrud.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long>{
    
}
