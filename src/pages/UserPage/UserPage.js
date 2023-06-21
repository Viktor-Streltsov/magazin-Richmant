import React from "react"
import classes from './User.module.css';
import avatar from '../img/avatar-admin.png';


function User() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.conteiner}>
                <main className={classes.block_content}>
                    <section className={classes.block_head_content}>
                        <div className={classes.block_head_one}>
                            <div className={classes.block_img_avatar}>
                                <div className={classes.img_avatar}>
                                    <img src={avatar} alt="avatar" />
                                </div>
                            </div>
                            <div className={classes.name_avatar_email}>
                                <h3>Mark Wilson</h3>
                                <p>freduardo@simmmple.com</p>
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
                                    <th>Things</th>
                                    <th>STATUS</th>
                                    <th>Date of purchase</th>
                                    <th>Sum</th>
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
                                            <h3><span className={classes.num_gr}>3</span></h3>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.status}>
                                            <p className={classes.text_status}>success</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>23/03/2023</p>
                                    </td>
                                    <td>
                                        <a href="#"><span className={classes.edit}>15000</span></a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default User
