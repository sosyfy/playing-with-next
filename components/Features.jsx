

const Features = () => {
    const featuresData = [
        {
            "image": "/assets/img/icons/features/1.png",
            "title": "Store Hours and Vacation",
            "descripition": "Ideal for businesses that are seasonal or operate between fixed hours."
        },
        {
            "image": "/assets/img/icons/features/2.png",
            "title": "Coupon Management",
            "descripition": "Set up irresistible deals and offers with flexible discount promo codes."
        },
        {
            "image": "/assets/img/icons/features/3.png",
            "title": "Product Import and Export",
            "descripition": "Import products from and export products to CSV from vendor dashboard."
        },
        {
            "image": "/assets/img/icons/features/4.png",
            "title": "Inquiry and Support Ticket System",
            "descripition": "Interaction with sellers help buyers to make better purchase decisions."
        },
        {
            "image": "/assets/img/icons/features/5.png",
            "title": "Membership Subscription",
            "descripition": "Offer membership plans for sellers, free and paid. Accept recurring fees."
        },
        {
            "image": "/assets/img/icons/features/6.png",
            "title": "Invoice and Shipping Labels",
            "descripition": "Order fulfillment made easy with store invoices and shipping labels."
        },
        {
            "image": "/assets/img/icons/features/7.png",
            "title": "GEO Location and Radius Search",
            "descripition": "Allow searching products or services near the user’s current location."
        },
        {
            "image": "/assets/img/icons/features/8.png",
            "title": "Shipment and Delivery",
            "descripition": "Share tracking of deliveries, notify when shipping status changes."
        }
    ]
    return (
        <section className={`features`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-head text-center mb-60">
                            <h2 className="mb-20">Our <span>Services</span></h2>
                            <p>
                                We provide perfect IT Solutions for your business
                            </p>
                        </div>

                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        {
                            featuresData.map((feature, i) => (
                                <div className="col-lg-3 col-sm-6" key={i}>
                                    <a href="#" className="features-card mb-30 ">
                                        <div className="icon">
                                            <img src={feature.image} alt="" />
                                        </div>
                                        <div className="info">
                                            <h5 className="card-title">
                                                {feature.title}
                                            </h5>
                                            <p className="text">
                                                {feature.descripition}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features