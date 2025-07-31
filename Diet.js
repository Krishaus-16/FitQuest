import React from "react";
import { useLocation } from "react-router-dom";

const Diet = () => {
  const location = useLocation();
  const { category } = location.state || {};

  const weeklyPlan = [
    { day: "Monday", meals: ["Oatmeal with fruits", "Grilled chicken salad", "Steamed veggies with brown rice"] },
    { day: "Tuesday", meals: ["Scrambled eggs & toast", "Tuna sandwich", "Grilled salmon with quinoa"] },
    { day: "Wednesday", meals: ["Smoothie bowl", "Chicken wrap", "Baked sweet potato & veggies"] },
    { day: "Thursday", meals: ["Greek yogurt & berries", "Turkey sandwich", "Grilled tofu stir fry"] },
    { day: "Friday", meals: ["Banana pancakes", "Veggie pasta", "Chicken curry & rice"] },
    { day: "Saturday", meals: ["Avocado toast", "Rice & beans", "Fish tacos"] },
    { day: "Sunday", meals: ["Boiled eggs & toast", "Quinoa salad", "Lentil soup with bread"] },
  ];

  const categoryPlans = {
    Underweight: [
      { day: "Monday", meals: ["Avocado toast", "Chicken sandwich", "Salmon with quinoa"] },
      { day: "Tuesday", meals: ["Peanut butter smoothie", "Turkey wrap", "Beef stir fry"] },
      { day: "Wednesday", meals: ["Greek yogurt & granola", "Tuna wrap", "Chicken curry with rice"] },
      { day: "Thursday", meals: ["Pasta with cream sauce", "Grilled cheese sandwich", "Steak with mashed potatoes"] },
      { day: "Friday", meals: ["Omelette with spinach", "Chicken salad with avocado", "Spaghetti with meatballs"] },
      { day: "Saturday", meals: ["Smoothie bowl with nuts", "Veggie burger", "Salmon & asparagus"] },
      { day: "Sunday", meals: ["Pancakes with maple syrup", "Pasta with chicken", "Roast chicken with veggies"] },
    ],
    Fit: weeklyPlan,
    Overweight: [
      { day: "Monday", meals: ["Oatmeal with berries", "Chicken salad with lemon", "Grilled fish with veggies"] },
      { day: "Tuesday", meals: ["Egg whites with avocado", "Tuna salad", "Zucchini noodles with turkey"] },
      { day: "Wednesday", meals: ["Greek yogurt with chia seeds", "Chicken wrap with veggies", "Steamed veggies with quinoa"] },
      { day: "Thursday", meals: ["Smoothie with spinach", "Turkey sandwich", "Grilled tofu with broccoli"] },
      { day: "Friday", meals: ["Scrambled eggs with spinach", "Veggie soup", "Grilled salmon with salad"] },
      { day: "Saturday", meals: ["Avocado toast with eggs", "Grilled chicken with brown rice", "Vegetable stir fry"] },
      { day: "Sunday", meals: ["Boiled eggs & avocado", "Quinoa salad with greens", "Lentil soup with veggies"] },
    ],
  };

  const selectedPlan = categoryPlans[category] || weeklyPlan;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{category} Weekly Meal Plan</h2>
      <div className="row">
        {selectedPlan.map((day, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card h-100"
              style={{
                boxShadow: "0 4px 15px rgba(17, 122, 101, 0.4)",
                borderRadius: "12px",
                padding: "16px",
                minHeight: "250px",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{day.day}</h5>
                <ul>
                  {day.meals.map((meal, i) => (
                    <li key={i}>{meal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;
