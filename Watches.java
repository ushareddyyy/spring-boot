package com.mru.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Watches {
    @Id
    private int id;
    private String pname;
    private int pcost;
    private String pimage;
    private int qty;
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
	public int getPcost() {
		return pcost;
	}
	public void setPcost(int pcost) {
		this.pcost = pcost;
	}
	public String getPimage() {
		return pimage;
	}
	public void setPimage(String pimage) {
		this.pimage = pimage;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	@Override
	public String toString() {
		return "Watches [id=" + id + ", pname=" + pname + ", pcost=" + pcost + ", pimage=" + pimage + ", qty=" + qty
				+ ", getId()=" + getId() + ", getPname()=" + getPname() + ", getPcost()=" + getPcost()
				+ ", getPimage()=" + getPimage() + ", getQty()=" + getQty() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	public Watches() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Watches(int id, String pname, int pcost, String pimage, int qty) {
		super();
		this.id = id;
		this.pname = pname;
		this.pcost = pcost;
		this.pimage = pimage;
		this.qty = qty;
	}

    
}
