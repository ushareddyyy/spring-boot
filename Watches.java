package com.mru.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Watches {
	@Id
	private int id;
	private String pname;
	private double pcost;
	private String pimage;
	private int pqty;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public double getPcost() {
		return pcost;
	}
	public void setPcost(double pcost) {
		this.pcost = pcost;
	}
	public String getPimage() {
		return pimage;
	}
	public void setPimage(String pimage) {
		this.pimage = pimage;
	}
	public int getPqty() {
		return pqty;
	}
	public void setPqty(int pqty) {
		this.pqty = pqty;
	}
	@Override
	public String toString() {
		return "Watches [id=" + id + ", pname=" + pname + ", pcost=" + pcost + ", pimage=" + pimage + ", pqty=" + pqty
				+ "]";
	}
	public Watches() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Watches(int id, String pname, double pcost, String pimage, int pqty) {
		super();
		this.id = id;
		this.pname = pname;
		this.pcost = pcost;
		this.pimage = pimage;
		this.pqty = pqty;
	}
	
	
}
