package com.org.sweetpress.menuitem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("order-items")
public class MenuItemController {

    private final MenuItemServiceImpl menuItemServiceImpl;

    public MenuItemController(MenuItemServiceImpl menuItemServiceImpl) {
        this.menuItemServiceImpl = menuItemServiceImpl;
    }

    @GetMapping
    public List<MenuItemEntity> getAllItems() {
        return menuItemServiceImpl.getAllMenuItems();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public boolean newOrderItem(@RequestBody MenuItemEntity menuItemEntity) {
        return menuItemServiceImpl.createMenuItem(menuItemEntity);
    }
    @PutMapping(value = "/{itemId}")
    public boolean updateMenuItem(@PathVariable String itemId, @RequestBody MenuItemEntity menuItemEntity) {
        return menuItemServiceImpl.updateMenuItem(itemId, menuItemEntity);
    }
    // delete item
    @DeleteMapping(value = "/delete/{itemId}")
    public boolean deleteMenuItem(@PathVariable String itemId) {
        return menuItemServiceImpl.deleteMenuItem(Long.valueOf(itemId));
    }
}
