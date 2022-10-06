package com.org.sweetpress.menuitem;

import java.util.List;

public interface MenuItemService {
    boolean createMenuItem(MenuItemEntity menuItemEntity);
    // post
    boolean updateMenuItem(String id, MenuItemEntity menuItemEntity);
    // patch

    // bool?
    boolean deleteMenuItem(Long id);

    List<MenuItemEntity> getMenuItem(String id);
    List<MenuItemEntity> getAllMenuItems();

}
