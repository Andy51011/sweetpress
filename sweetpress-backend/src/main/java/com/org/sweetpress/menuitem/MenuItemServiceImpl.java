package com.org.sweetpress.menuitem;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemServiceImpl implements MenuItemService {

    private final MenuItemRepository menuItemRepository;

    public MenuItemServiceImpl(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @Override
    public boolean createMenuItem(MenuItemEntity menuItemEntity) {
        MenuItemEntity newMenuItemEntity = new MenuItemEntity(
                menuItemEntity.getId(),
                menuItemEntity.getItemName(),
                menuItemEntity.getItemImage(),
                menuItemEntity.getItemDesc(),
                menuItemEntity.getItemPrice());
        menuItemRepository.save(newMenuItemEntity);
        return true;
    }

    @Override
    public boolean updateMenuItem(String id, MenuItemEntity menuItemEntity) {
        MenuItemEntity currMenuItem = menuItemRepository.getReferenceById(Integer.valueOf(id));
        if (currMenuItem.getItemName() != null) {
            menuItemRepository.save(menuItemEntity);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteMenuItem(Long id) {
        menuItemRepository.deleteById(Math.toIntExact(id));
        return true;
    }

    @Override
    public List<MenuItemEntity> getMenuItem(String id) {
        return menuItemRepository.findAllById(Long.valueOf(id));
    }

    @Override
    public List<MenuItemEntity> getAllMenuItems() {
        return menuItemRepository.findAll();
    }
}
