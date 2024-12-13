import React, { useState } from 'react';
import '../components/css/Pricing.css';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$19/month',
    features: ['1 Website', '10 GB Storage', 'Basic Support'],
    description: 'Perfect for individuals starting their journey.',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$49/month',
    features: ['5 Websites', '50 GB Storage', 'Priority Support'],
    description: 'Ideal for small teams and businesses.',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$99/month',
    features: ['Unlimited Websites', '200 GB Storage', '24/7 Support'],
    description: 'Best for enterprises and large teams.',
  },
];

const Pricing = () => {
  const [activePlan, setActivePlan] = useState('basic');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePlanChange = (id) => {
    setActivePlan(id);
  };

  return (
    <>
      <section className="pricing">
        <div className="container" id="pricing">
          <h2 className="section_title">Pricing Plans</h2>
          <p className="section_description">
            Choose the best plan that suits your needs and budget.
          </p>
          <div className="tabs">
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={`tab_btn ${activePlan === plan.id ? 'active' : ''}`}
                onClick={() => handlePlanChange(plan.id)}
              >
                {plan.name}
              </button>
            ))}
          </div>
          <div className="tab_content">
            {plans
              .filter((plan) => plan.id === activePlan)
              .map((plan) => (
                <div key={plan.id} className="plan">
                  <h3 className="plan_name">{plan.name}</h3>
                  <p className="plan_price">{plan.price}</p>
                  <p className="plan_description">{plan.description}</p>
                  <ul className="features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn_primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal_overlay_price">
          <div className="modal_price">
            <h2>Thank You for Choosing {plans.find(plan => plan.id === activePlan)?.name} Plan!</h2>
            <p>Our team will reach out to you shortly to finalize the setup.</p>
            <button className="btn btn_secondary" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Pricing;
