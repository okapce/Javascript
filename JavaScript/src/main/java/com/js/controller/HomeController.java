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
	
	@RequestMapping("/ch6s10")
	//@ResponseBody	//views return only
	public String showch6s10() {
		System.out.println("Running the ch6s10 demo");
		return "ch6Sandbox10";
	}
	
	@RequestMapping("/ch6s11")
	//@ResponseBody	//views return only
	public String showch6s11() {
		System.out.println("Running the ch6s11 demo");
		return "ch6Sandbox11";
	}
	
	@RequestMapping("/ch6s12")
	//@ResponseBody	//views return only
	public String showch6s12() {
		System.out.println("Running the ch6s12 demo");
		return "ch6Sandbox12";
	}
	
	@RequestMapping("/ch7s01")
	//@ResponseBody	//views return only
	public String showch7s01() {
		System.out.println("Running the ch7s01 demo");
		return "ch7S01";
	}
}
