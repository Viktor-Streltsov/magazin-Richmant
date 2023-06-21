import React from 'react';
import classes from './Admin.module.css';
import admin from '../img/avatar-admin.png';


function Admin() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.conteiner}>
                <main className={classes.block_content}>
                    <section className={classes.block_head_content}>
                        <div className={classes.block_head_one}>
                            <div className={classes.block_img_avatar}>
                                <div className={classes.img_avatar}>
                                    <img src={admin} alt="avatar" />
                                </div>
                            </div>
                            <div className={classes.name_avatar_email}>
                                <h3>Esthera Jackson</h3>
                                <p>administrator</p>
                            </div>
                        </div>
                    </section>
                    <div className={classes.block_progect}>
                        <div className={classes.head_progect}>
                            <h3>Authors Table</h3>
                        </div>
                        <div className={classes.block_table}>
                            <table className={classes.table}>
                                <tr>
                                    <th>Cigarettes</th>
                                    <th>Sale & Balance</th>
                                    <th>STATUS</th>
                                    <th>Volume</th>
                                    <th>Total amount</th>
                                </tr>
                                <tr>
                                    <td className={classes.block_avtor}>
                                        <div className={classes.img_file}>
                                            <div className={classes.circle}>
                                            </div>
                                        </div>
                                        <div className={classes.text_avtor_file}>
                                            <h3>Featured Meal</h3>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.text_function}>
                                            <h3><span className={classes.num_quantiti}>34</span>/<span className={classes.num_sold}>14</span></h3>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.status}>
                                            <p className={classes.text_status}>In stock</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p><span className={classes.num_gr}>2</span></p>
                                    </td>
                                    <td>
                                        <a href="#"><span className={classes.edit}>1000</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.block_avtor}>
                                        <div className={classes.img_file}>
                                            <div className={classes.circle}>
                                            </div>
                                        </div>
                                        <div className={classes.text_avtor_file}>
                                            <h3>Featured Meal</h3>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.text_function}>
                                            <h3>34/12</h3>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.status}>
                                            <p className={classes.text_status}>In stock</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p><span>7</span></p>
                                    </td>
                                    <td>
                                        <a href="#"><span className={classes.edit}>1500</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.block_avtor}>
                                        <div className={classes.img_file}>
                                            <div className={classes.circle}>
                                            </div>
                                        </div>
                                        <div className={classes.text_avtor_file}>
                                            <h3>Featured Meal</h3>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.text_function}>
                                            <h3>34/12</h3>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.status}>
                                            <p className={classes.text_status}>In stock</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p><span>8</span></p>
                                    </td>
                                    <td>
                                        <a href="#"><span className={classes.edit}>1500</span></a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}


export default Admin