<script setup>
import { ref } from 'vue'

// components
import ThreeModel from '../comps/floatingDino.vue';

defineProps({
	msg: String,
})

const count = ref(0)
</script>

<template><div>
	<header class="top-0 z-50 bg-color-primary">
		<nav class="container flex justify-between items-center">
			<div class="w-10 py-5 text-color-secondary font-bold text-3x1">
				<a href="#home">
					<img src="/pyramid.svg" class="logo" alt="Pyramid Logo" />
					<span class="text-color-white">Jah</span>Knows
				</a>
			</div>

			<div>
				<ul class="hidden lg:flex items-center space-x-6">
					<li><a href="#home" class="hover:text-color-secondary ease-in duration-200">Home</a></li>
					<li><a href="#about" class="hover:text-color-secondary ease-in duration-200">About</a></li>
					<li><a href="#media" class="hover:text-color-secondary ease-in duration-200">Media</a></li>
					<li><a href="#shop" class="hover:text-color-secondary ease-in duration-200">Shop</a></li>
					<li><a href="#dm" class="btn hover:text-color-secondary ease-in duration-200">Let's Talk</a></li>
                    <li><button class="btn" @click="count++">Boops: {{ count }}</button></li>
					<!-- <li><button class="btn">Let's Talk</button></li> -->
				</ul>
			</div>

			<!-- Mobile Screen -->
			<div id="hamburger" class="hidden cursor-pointer">
				<i class="fa-solid fa-bars"></i>
			</div>

			<div id="menu" class="hidden bg-color-primary-dark h-[100vh] absolute inset-0">
				<ul class="h-full grid place-items-center py-20">
					<li><a href="#home" class="hover:text-color-secondary ease-in duration-200">Home</a></li>
					<li><a href="#about" class="hover:text-color-secondary ease-in duration-200">About</a></li>
					<li><a href="#media" class="hover:text-color-secondary ease-in duration-200">Media</a></li>
					<li><a href="#shop" class="hover:text-color-secondary ease-in duration-200">Shop</a></li>
					<li><a href="#dm" class="btn hover:text-color-secondary ease-in duration-200">Let's Talk</a></li>
                    <!-- <li><button class="brn">Let's Talk</button></li> -->
				
				</ul>
			</div>
		</nav>
	</header>

    <section id="ceo" class="relative bg-color-primary-light">
        <div class="container py-20">
            <div class="flex flex-col justify-center z-20 md:flex-row">
                <!-- <div class="w-1/3">
                    <img class="w-1/2 rounded-full" src="src/assets/face.svg" alt="">
                </div> -->
                <div class="text-center md:text-left md:w-1/2 md:pr-10">
                    <h1 class="title mb-4">I AM Jah Noah.</h1>
                    <p class="leading-relaxed mb-10">What is that one thing you have always dreamed of building?
                        Is it an artistic masterpiece, ambitious business venture, a family legacy?
                        I know you have what it takes to make it happen. Bold statement, huh? Well, no need to linger.
                        Let's get creative!</p>
                </div>
            </div>
        </div>
    </section>

	<main>
		<section id="about" class="bg-color-primary-light">
            <div class="container py-20">

				<!-- About Container Heading -->
                <div class="text-center m-auto mb-20 md:w-2/3">
                    <h4 class="font-bold text-color-secondary mb-4">About</h4>
                    <h1 class="title">A few blurbs about me.</h1>
                </div>

				<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                    
					<!-- card no 1 -->
                    <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                        <div class="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                            <i class="fa-solid fa-heartbeat text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold py-4">Mission</h3>
                        <p class="leading-relaxed">Helping individuals and groups tap into their natural abundance.</p>
                    </div>
                    
					<!-- card no 2 -->
                    <div class="bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer">
                        <div class="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                            <i class="fa-solid fa-bullseye text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold py-4">Vision</h3>
                        <p class="leading-relaxed">Uniting communities and nations universally with love, harmony, gratitude, and joy.</p>
                    </div>
                    
					<!-- card no 3 -->
                    <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                        <div class="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                            <i class="fa-solid fa-leaf text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold py-4">Message</h3>
                        <p class="leading-relaxed">I want to see all of my beautiful people thrive.</p>
                    </div>
                </div>
                <!-- <p class="text-center leading-relaxed mb-10">{{ msg }}</p> -->
            </div>
        </section>



        <section id="media" class="hidden">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Media</h4>
                    <h1 class="title">Blogs, Music, and Art</h1>
                </div>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <!-- card no 1 -->
                    <div>
                        <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                            <img src="./img/blog1.jpg" alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out">
                        </div>
    
                        <div>
                            <div class="flex items-center gap-5 py-5">
                                <p>8 May 2023</p>
                                <p>1 min read</p>
                            </div>
    
                            <a href="#blog" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">Four ways to cheer yourself up on Blue Monday!</a>
    
                            <p class="leading-relaxed my-5">On the second edition of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Salmon debate...</p>
    
    
                            <a href="#blog" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                                <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                            </a>
                        </div>
                    </div>
                    <!-- card no 2 -->
                    <div>
                        <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                            <img src="./img/blog2.jpg" alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out">
                        </div>
    
                        <div>
                            <div class="flex items-center gap-5 py-5">
                                <p>20 August 2022</p>
                                <p>1 min read</p>
                            </div>
    
                            <a href="#blog" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">How to Organize Your budget for Maximum Productivity?</a>
    
                            <p class="leading-relaxed my-5">Global provider connected products for consumers, and enterprises worldwide, supply chain control is everything...</p>
    
    
                            <a href="#blog" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                                <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                            </a>
                        </div>
                    </div>
                <!-- card no 3 -->
                <div>
                    <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                        <img src="./img/blog3.jpg" alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out">
                    </div>
                    <div>
                        <div class="flex items-center gap-5 py-5">
                            <p>30 February 2012</p>
                            <p>1 min read</p>
                        </div>
                        <a href="#blog" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">Should Small Businesses Be Entitled to system?</a>
                        <p class="leading-relaxed my-5">Our team provides skilled & experienced managers who know the intricacies of this vertical and focus...</p>
                        <a href="#blog" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                            <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>

		<section id="shop" class="hidden bg-color-primary-light">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Shop</h4>
                    <h1 class="title">High Quality, Made With Love</h1>
                    <!-- Rounded switch  -->
                    <div class="mt-5 flex items-center justify-center gap-4">
                        <p>Products</p>
                        <label class="cursor-pointer relative inline-block w-20 h-8 rounded-full">
                            <input type="checkbox" id="toggleBtn" class="peer opacity-0 w-0 h-0">
                            <span class="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
                        </label>
                        <p>Services</p>
                    </div>
                </div>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <!-- card 1 -->
                    <div class="card relative h-auto w-auto">
                        <!-- front side  -->
                        <div id="card_1_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    20<span class="text-sm font-normal tracking-widest"></span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Item 1</h3>
                                <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                            </ul>
                            <button class="card_btn">Lorem</button>
                        </div>
                        <!-- back side  -->
                        <div id="card_1_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    120<span class="text-sm font-normal tracking-widest"></span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Lorem</h3>
                                <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                            </ul>
                            <button class="card_btn">Ipsum</button>
                        </div>
                    </div>
                    <!-- card 2 -->
                    <div class="card relative h-auto w-auto">
                        <!-- front side  -->
                        <div id="card_2_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    50<span class="text-sm font-normal tracking-widest"></span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Lorem</h3>
                                <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                            </ul>
                            <button class="card_btn">Lorem</button>
                        </div>
                        <!-- back side  -->
                        <div id="card_2_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    150<span class="text-sm font-normal tracking-widest"></span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Ipsum</h3>
                                <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                            </ul>
                            <button class="card_btn">Ipsum</button>
                        </div>
                    </div>
                    <!-- card 3 -->
                    <div class="card relative h-auto w-auto">
                        <!-- front side  -->
                        <div id="card_3_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    100<span class="text-sm font-normal tracking-widest"></span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Lorem</h3>
                                <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                            </ul>
                            <button class="card_btn">Lorem</button>
                        </div>
                        <!-- back side  -->
                        <div id="card_3_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    500<span class="text-sm font-normal tracking-widest"></span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Ipsum</h3>
                                <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Lorem, ipsum.</span>
                                </li>
                            </ul>
                            <button class="card_btn">Ipsum</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="download-app" class="hidden bg-color-primary-light">
            <div class="container h-[80vh] grid place-items-center">
                <div class="text-center md:w-2/3 m-auto">
                    <h1 class="title">Download App Now And Explore</h1>
                    <p class="leading-relaxed pt-5">Serving an impressive list of long-term fun with experience and expertise in multiple industries.</p>
                    <div class="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
                        <a href="#" class="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                            <a class="fa-brands fa-google"></a>
                        </a>
                        <a href="#" class="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                            <a class="fa-brands fa-apple"></a>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Have A Questation</h4>
                    <h1 class="title">Get In Touch</h1>
                </div>
                <form>
                    <div class="w-full m-auto text-center md:w-2/3">
                        <div class="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
                            <input type="text" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Name">
                			<input type="email" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Email">
                			<input type="tel" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Phone">
                			<input type="text" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Company">
                        </div>
                        <textarea rows="4" class="text-color-primary-dark bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Message"></textarea>
                        <button class="btn mt-10">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        <section id="footer">
            <div class="bg-color-primary-dark relative">
                <div class="container py-10">
                    <div class="grid gap-10 md:grid-cols-3 pb-10">
                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">About</h4>
                            <p class="leading-relaxed">JahKnows puts the <a href="#about"> mission</a> first and company second. Everything is done with love
                            <a class="fa-heart"></a></p>
                            <div class="flex gap-5 items-center">
                                <p>Social Links</p>
                                    <a href=""><i class="fa-brands fa-github cursor-pointer hover:text-color-secondary"></i></a>
                                    <a href=""><i class="fa-brands fa-twitter cursor-pointer hover:text-color-secondary"></i></a>
                                    <a href=""><i class="fa-brands fa-youtube cursor-pointer hover:text-color-secondary"></i></a>
                                    <a href=""><i class="fa-brands fa-instagram cursor-pointer hover:text-color-secondary"></i></a>
                            </div>
                        </div>
                        <div class="flex justify-between md:justify-around">
                            <div class="space-y-6">
                                <h4 class="font-bold text-lg">Quick Links</h4>
                                <ul class="space-y-3">
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#">Home</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#about">About</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#shop">Shop</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#dm">Chat</a></li>
                                </ul>
                            </div>
                            <div class="space-y-6">
                                <h4 class="font-bold text-lg">Media</h4>
                                <ul class="space-y-3">
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#projects">Projects</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#blogs">Blogs</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#music">Music</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#fun">Fun :-)</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">Newsletter</h4>
                            <p class="leading-relaxed">Subscribe to the monthly newsletter (Coming Soon) !</p>
                            <div class="flex items-center">
                                <input type="text" class="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none" placeholder="Enter Your Email">
                                
                                <button type="submit" class="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center pt-10 border-t border-color-gray">
                        <p>2023 &copy; JahKnows, LLC. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
	</main>
</div></template>

<style scoped>
</style>
