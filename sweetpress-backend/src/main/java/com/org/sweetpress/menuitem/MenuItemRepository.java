package com.org.sweetpress.menuitem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItemEntity, Integer> {
    List<MenuItemEntity> findAllById(Long id);


}
