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
	
	@RequestMapping("/ch8s01")
	//@ResponseBody	//views return only
	public String showch8s01() {
		System.out.println("Running the ch8s01 demo");
		return "ch8S01";
	}	
	
	@RequestMapping("/ch9s01")
	//@ResponseBody	//views return only
	public String showch9s01() {
		System.out.println("Running the ch9s01 demo");
		return "ch9S01";
	}
	
	@RequestMapping("/ch10s01")
	//@ResponseBody	//views return only
	public String showch10s01() {
		System.out.println("Running the ch10s01 demo");
		return "ch10S01";
	}
	
	@RequestMapping("/ch11s01")
	//@ResponseBody	//views return only
	public String showch11s01() {
		System.out.println("Running the ch11s01 demo");
		return "ch11S01";
	}
	
	@RequestMapping("/ch12s01")
	//@ResponseBody	//views return only
	public String showch12s01() {
		System.out.println("Running the ch12s01 demo");
		return "ch12S01";
	}
	
	@RequestMapping("/ch13s01")
	//@ResponseBody	//views return only
	public String showch13s01() {
		System.out.println("Running the ch13s01 demo");
		return "ch13S01";
	}
	
	@RequestMapping("/ch14s01")
	//@ResponseBody	//views return only
	public String showch14s01() {
		System.out.println("Running the ch14s01 demo");
		return "ch14S01";
	}
}
