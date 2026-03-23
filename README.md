# 🛠️ TypeScript Design Patterns

Welcome to the **TypeScript Design Patterns** repository! This project provides simple, real-world, and easy-to-understand implementations of the most common software design patterns using TypeScript.

Instead of abstract and confusing textbook examples, this repository focuses on practical scenarios you encounter every day as a developer (like e-commerce checkouts, smart homes, and delivery systems).

## 🎯 Goal

The main objective of this repository is to bridge the gap between theory and practice. For each pattern, you will find:
1. **The Problem:** How the code looks *without* the pattern (Anti-patterns, "Spaghetti code", heavy `if/else` blocks).
2. **The Solution:** How to refactor the code using the Design Pattern.
3. **Clean Code & SOLID:** How the pattern naturally enforces principles like Single Responsibility (SRP) and Open/Closed (OCP).

---

## 📚 Patterns Included

The patterns are divided into three main categories:

### 1. Creational Patterns
These patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
* **[Simple Factory]** - Encapsulates object creation to remove direct `new` calls from the main business logic (e.g., *Enemy Spawner*).
* **[Singleton]** - Ensures a class has only one instance and provides a global point of access to it (e.g., *System Configuration Manager*).

### 2. Structural Patterns
These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.
* **[Adapter]** - Allows objects with incompatible interfaces to collaborate (e.g., *Different Power Plugs*).
* **[Decorator]** - Attaches new behaviors to objects by placing them inside special wrapper objects (e.g., *Coffee Shop Add-ons*).
* **[Facade]** - Provides a simplified interface to a library, a framework, or any other complex set of classes (e.g., *Smart Home System*).
* **[Proxy]** - Provides a substitute or placeholder for another object to control access to it (e.g., *Security Access Control*).

### 3. Behavioral Patterns
These patterns are concerned with algorithms and the assignment of responsibilities between objects.
* **[Observer]** - A subscription mechanism to notify multiple objects about any events that happen to the object they're observing (e.g., *Inventory Alert System*).
* **[State]** - Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class (e.g., *E-commerce Order Status* / *Subway Turnstile*).
* **[Strategy]** - Lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable (e.g., *Shipping Cost Calculator*).
* **[Template Method]** - Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure (e.g., *Data File Parser*).