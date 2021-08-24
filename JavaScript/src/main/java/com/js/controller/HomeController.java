package com.js.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	@RequestMapping("/home")
	//@ResponseBody	//views return only
	public String showPage() {
		System.out.println("Running Home Page");
		return "index";
	}
	
	@RequestMapping("/dom")
	//@ResponseBody	//views return only
	public String showDom() {
		System.out.println("Running the DOM");
		return "domTests";
	}
}
