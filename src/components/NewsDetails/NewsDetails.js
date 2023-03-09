import './NewsDetails.css';

export const NewsDetails = () => {
    return (
        <section className="news-details">
            <div className="news-details-container">
                <div className="details-header">
                    <h1 className="details-title">Tony Stark Got Pregnant</h1>
                    <div className="details-owner-options">
                        <i className="fa-solid fa-pen"></i>
                        <i className="fa-solid fa-x"></i>
                    </div>
                </div>

                <div className="details">
                    <img src="images/AP20056580390963-e1660147513773.jpg" />

                    <div className="details-text">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, libero explicabo nemo
                            obcaecati, dolorem sapiente, labore praesentium fugiat odio voluptatem possimus saepe velit
                            ea tempora! Unde quae qui ex nihil at reprehenderit a quo expedita voluptatibus ut. Minus
                            officiis nisi id, est maxime, labore illum harum recusandae quo temporibus totam et optio
                            odio quasi atque ullam distinctio, odit rem provident libero eos eveniet animi earum.
                            Quaerat inventore quae consectetur dolores alias, earum vero! Unde sint asperiores culpa
                            quidem. Unde rem architecto iste fuga in nihil ut nesciunt impedit magnam officia,
                            voluptates harum dicta, non tenetur quis, sit eum alias incidunt totam dolorem? Officiis
                            consequuntur ducimus ad fuga consectetur. Deserunt corporis in sed nisi fugiat odit delectus
                            laborum ad. Mollitia laborum, corporis tenetur autem esse aut, qui ratione sequi iste
                            quaerat veniam modi adipisci repellendus alias ex odit similique recusandae officia rerum
                            neque culpa facilis beatae magnam sed. Accusantium, sit asperiores. Cum maxime pariatur,
                            nemo maiores officiis ea, at quos deserunt, quae delectus alias quas totam ipsam a magnam id
                            saepe quibusdam sed iure. Quibusdam consequatur earum nisi maiores voluptatum est
                            necessitatibus dolorem non, excepturi dicta alias atque quis error beatae recusandae
                            sapiente hic consectetur ullam eaque, unde sed accusantium accusamus!</h5>
                    </div>
                </div>


                <div className="comments-container">
                    <h1 className="comments-title">Comments</h1>
                    <div className="comment-box">
                        <img src="/images/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg" />
                        <div className="user-comment">
                            <span>kikoner81@gmail.com</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At repellendus reprehenderit ex
                                facere, quisquam delectus repudiandae neque maxime rem eius.</p>
                        </div>
                        <div className="details-owner-options">
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                    <div className="comment-box">
                        <img src="/images/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg" />
                        <div className="user-comment">
                            <span>kikoner81@gmail.com</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At repellendus reprehenderit ex
                                facere, quisquam delectus repudiandae neque maxime rem eius.</p>
                        </div>
                        <div className="details-owner-options">
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                    <div className="comment-box">
                        <img src="/images/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg" />
                        <div className="user-comment">
                            <span>kikoner81@gmail.com</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At repellendus reprehenderit ex
                                facere, quisquam delectus repudiandae neque maxime rem eius.</p>
                        </div>
                        <div className="details-owner-options">
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}