---
date: 26/08/2023
categories: ['data_visualisation', 'research', 'python']
title: Your handy irreducibility polynomial checker
image: ./images/irreducibility.jpg
description: "Ever wanted to code an entire game from scratch? "

---

If you did some Math Olympiads, you'd have known about polynomial irreducibility, right? This blog will talk about how I create a Python script to check if a polynomial irreducibility, and give a maths proof to prove the statement.

So in 2022, I had the opportunity to join a Math summer camp with a few of my friends. The camp was really intensive and fun, and I learned a lot of Math Olympiads problems during that enjoyable time. And in one class about polynomial irreducibily, we learned about a few techniques, or criterions to check the irreducibility, including Eisenstein, Cohn, and Perron's criterions. And what's interesting is that, if the polynomial P(x) is irreducible, then the polynomial P(x+n) is also irreducible for some integer n. What this means is that if I can run through all n from -100000 to 100000, I'd have a really high chance to prove the irreducibility using the previous criterions.