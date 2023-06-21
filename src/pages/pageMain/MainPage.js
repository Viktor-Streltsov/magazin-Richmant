import React from 'react';
import classes from './Main.module.css';
import wath from '../img/watch.png';
import nearme from '../img/near_me.png';
import call from '../img/call.png';
import arrow_left_black from '../img/arrow-left-black.png';
import arrow_right_black from '../img/arrow-right-black.png';
import sigaret from '../img/sigaret-more.png';
import rich1 from '../img/rich1.png';
import rich2 from '../img/rich2.png';
import rich3 from '../img/rich3.png';
import rich4 from '../img/rich4.png';
import rich5 from '../img/rich5.png';
import rich6 from '../img/rich6.png';
import sherp from '../img/share.png';

function Main() {
    return(
        <div className={classes.wrapper}>
        <div className={classes.conteiner}>
            <section className={classes.one_block_food}>
                <div className={classes.your_favarite_food}>
                    <h1 className={classes.title_head_food}>
                        Your <span>Lorem, ipsum</span>
                        Delivered <span>Hot & Fresh</span>
                    </h1>
                    <p className={classes.text_head_food}>
                        HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                    </p>
                </div>
                <div className={classes.button_order_now}>
                    <a href="#"><span>Order Now</span></a>
                </div>
                <div className={classes.info_about_restoran}>
                    <ul>
                        <li>
                            <img src={wath} alt="icon"/>
                            <p>Today 10:00 am _ 7:00 pm</p>
                            <p className={classes.text_info}>Working hours</p>
                        </li>
                        <li>
                            <img src={nearme} alt="icon"/>
                            <p>Velyka Vasylkivska 100</p>
                            <p className={classes.text_info}>Get Directions</p>
                        </li>
                        <li>
                            <img src={call} alt="icon"/>
                            <p>+38 (063)833 24 15</p>
                            <p className={classes.text_info}>Call Online</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={classes.basics_food}>
                <header className={classes.basics_head}>
                    <h2 className={classes.about_head_basics}>
                        ABOUT
                    </h2>
                    <h2 className={classes.text_head_basics}>
                        The Basics Of Healthy Food
                    </h2>
                </header>
                <div className={classes.text_basics}>
                    <p>
                        In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
                    </p>
                </div>
                <div className={classes.slider}>
                    <div className={classes.arrow_left}>
                        <img src={arrow_left_black} alt="arrow"/>
                    </div>
                    <ul>
                        <li>
                            <img src={sigaret} alt="img"/>
                        </li>
                    </ul>
                    <div className={classes.arrow_right}>
                        <img src={arrow_right_black} alt="arrow"/>
                    </div>
                </div>
            </section>
            <section className={classes.dish_day}>
                <div className={classes.dish_head}>
                    <h2 className={classes.about_head_dish}>
                        CIGARETTES
                    </h2>
                    <h2 className={classes.text_head_dish}>
                        Dish Of The Day
                    </h2>
                </div>
                <div className={classes.line_dish}></div>
                <ul className={classes.blocks_dish}>
                    <li className={classes.dish_meal}>
                        <div className={classes.img_dish_meal}>
                            <img className={classes.img_rich} src={rich1} alt="img"/>
                            <div className={classes.arrow_share}>
                                <img src={sherp} alt="share"/>
                            </div>
                        </div>
                        <div className={classes.info_dish_meal}>
                            <h2 className={classes.info_head}>
                                Featured Meal
                            </h2>
                            <p className={classes.mini_info_head}>
                                Served with french fries + drink
                            </p>
                            <p className={classes.text_info}>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </p>
                        </div>
                        <div className={classes.status_star_meal}>
                            <div className={classes.block_star}>
                                {/* <ul className={classes.stars}>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1448" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1448)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1454" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1454)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <div className={classes.count_grade}>12</div>
                                    </li>
                                </ul> */}
                                <div className={classes.button_block_order}>
                                    <a href="#">
                                        <span>ORDER</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={classes.dish_meal}>
                        <div className={classes.img_dish_meal}>
                            <img className={classes.img_rich} src={rich2} alt="img"/>
                            <div className={classes.arrow_share}>
                                <img src={sherp} alt="share" />
                            </div>
                        </div>
                        <div className={classes.info_dish_meal}>
                            <h2 className={classes.info_head}>
                                Featured Meal
                            </h2>
                            <p className={classes.mini_info_head}>
                                Served with french fries + drink
                            </p>
                            <p className={classes.text_info}>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </p>
                        </div>
                        <div className={classes.status_star_meal}>
                            <div className={classes.block_star}>
                                {/* <ul className={classes.stars}>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1448" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1448)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1454" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1454)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <div className={classes.count_grade}>12</div>
                                    </li>
                                </ul> */}
                                <div className={classes.button_block_order}>
                                    <a href="#">
                                        <span>ORDER</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={classes.dish_meal}>
                        <div className={classes.img_dish_meal}>
                            <img className={classes.img_rich} src={rich3} alt="img" />
                            <div className={classes.arrow_share}>
                                <img src={sherp} alt="share" />
                            </div>
                        </div>
                        <div className={classes.info_dish_meal}>
                            <h2 className={classes.info_head}>
                                Featured Meal
                            </h2>
                            <p className={classes.mini_info_head}>
                                Served with french fries + drink
                            </p>
                            <p className={classes.text_info}>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </p>
                        </div>
                        <div className={classes.status_star_meal}>
                            <div className={classes.block_star}>
                                {/* <ul className={classes.stars}>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1448" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1448)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1454" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1454)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <div className={classes.count_grade}>12</div>
                                    </li>
                                </ul> */}
                                <div className={classes.button_block_order}>
                                    <a href="#">
                                        <span>ORDER</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={classes.dish_meal}>
                        <div className={classes.img_dish_meal}>
                            <img className={classes.img_rich} src={rich4} alt="img" />
                            <div className={classes.arrow_share}>
                                <img src={sherp} alt="share" />
                            </div>
                        </div>
                        <div className={classes.info_dish_meal}>
                            <h2 className={classes.info_head}>
                                Featured Meal
                            </h2>
                            <p className={classes.mini_info_head}>
                                Served with french fries + drink
                            </p>
                            <p className={classes.text_info}>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </p>
                        </div>
                        <div className={classes.status_star_meal}>
                            <div className={classes.block_star}>
                                {/* <ul className={classes.stars}>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1448" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1448)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1454" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1454)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <div className={classes.count_grade}>12</div>
                                    </li>
                                </ul> */}
                                <div className={classes.button_block_order}>
                                    <a href="#">
                                        <span>ORDER</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={classes.dish_meal}>
                        <div className={classes.img_dish_meal}>
                            <img className={classes.img_rich} src={rich5} alt="img"/>
                            <div className={classes.arrow_share}>
                                <img src={sherp} alt="share"/>
                            </div>
                        </div>
                        <div className={classes.info_dish_meal}>
                            <h2 className={classes.info_head}>
                                Featured Meal
                            </h2>
                            <p className={classes.mini_info_head}>
                                Served with french fries + drink
                            </p>
                            <p className={classes.text_info}>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </p>
                        </div>
                        <div className={classes.status_star_meal}>
                            <div className={classes.block_star}>
                                {/* <ul className={classes.stars}>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1448" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1448)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1454" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1454)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <div className={classes.count_grade}>12</div>
                                    </li>
                                </ul> */}
                                <div className={classes.button_block_order}>
                                    <a href="#">
                                        <span>ORDER</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={classes.dish_meal}>
                        <div className={classes.img_dish_meal}>
                            <img className={classes.img_rich} src={rich6} alt="img" />
                            <div className={classes.arrow_share}>
                                <img src={sherp} alt="share" />
                            </div>
                        </div>
                        <div className={classes.info_dish_meal}>
                            <h2 className={classes.info_head}>
                                Featured Meal
                            </h2>
                            <p className={classes.mini_info_head}>
                                Served with french fries + drink
                            </p>
                            <p className={classes.text_info}>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </p>
                        </div>
                        <div className={classes.status_star_meal}>
                            <div className={classes.block_star}>
                                {/* <ul className={classes.stars}>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1440" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1440)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1448" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1448)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_483_1454" style="mask_type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                                            <path fill_rule="evenodd" clip_rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_483_1454)">
                                            <rect x="_3" y="_3" width="26" height="26" fill="#4D4D4D"/>
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <div className={classes.count_grade}>12</div>
                                    </li>
                                </ul> */}
                                <div className={classes.button_block_order}>
                                    <a href="#">
                                        <span>ORDER</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
    )
}

export default Main