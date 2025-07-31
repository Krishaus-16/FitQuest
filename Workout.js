import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const workoutPlans = {
  Fit: [
    { 
      name: "Burpees", 
      image: "https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0=", 
      description: "Full-body workout for stamina.",
      calories: 100,
      hours: 0.5,
      benefits: "Improves stamina and strength"
    },
    { 
      name: "Push-Ups", 
      image: "https://media.istockphoto.com/id/619088796/photo/fitness-girl-lifting-dumbbell-in-the-morning.jpg?s=612x612&w=0&k=20&c=m8gUYPVV1ZfWpfjrKjzWn-a8DVHnw1hGp-rjh6c40f0=", 
      description: "Strengthens upper body and core.",
      calories: 80,
      hours: 0.4,
      benefits: "Builds upper body strength"
    },
    { 
      name: "Plank", 
      image: "https://www.shape.com/thmb/2GxumCbjQnz6FzoaaO2F-0MjfGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Triple-Threat-Workout-GettyImages-685041425-2000-4a753ee8ec924cdd816616f1ec003f9f.jpg", 
      description: "Improves posture and core strength.",
      calories: 50,
      hours: 0.3,
      benefits: "Enhances core stability"
    }
  ],
  Underweight: [
   {
     name: "Barbell Squats",
     image:"https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0=",
     description: "Builds leg and glute strength for mass gain.",
     calories: 120,
     hours: 0.6,
     benefits: "Increases leg muscle mass"
   },
   {
     name:"Deadlifts",
     image:"https://media.istockphoto.com/id/619088796/photo/fitness-girl-lifting-dumbbell-in-the-morning.jpg?s=612x612&w=0&k=20&c=m8gUYPVV1ZfWpfjrKjzWn-a8DVHnw1hGp-rjh6c40f0=",
     description:"Boosts full-body strength and muscle growth.",
     calories: 130,
     hours: 0.7,
     benefits: "Strengthens entire body"
   },
   {
     name:"Bench Press",
     image:"https://www.shape.com/thmb/2GxumCbjQnz6FzoaaO2F-0MjfGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Triple-Threat-Workout-GettyImages-685041425-2000-4a753ee8ec924cdd816616f1ec003f9f.jpg",
     description:"Targets chest for upper body mass.",
     calories: 90,
     hours: 0.5,
     benefits: "Builds chest muscles"
   }
  ],
  Overweight: [
    { 
      name: "Jumping Jacks", 
      image: "https://www.shape.com/thmb/2GxumCbjQnz6FzoaaO2F-0MjfGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Triple-Threat-Workout-GettyImages-685041425-2000-4a753ee8ec924cdd816616f1ec003f9f.jpg", 
      description: "Great for cardio and warming up.",
      calories: 70,
      hours: 0.4,
      benefits: "Improves cardiovascular health"
    },
    { 
      name: "Squats", 
      image: "https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0=", 
      description: "Strengthens legs and glutes.",
      calories: 110,
      hours: 0.5,
      benefits: "Tones lower body"
    },
    { 
      name: "Lunges", 
      image: "https://media.istockphoto.com/id/619088796/photo/fitness-girl-lifting-dumbbell-in-the-morning.jpg?s=612x612&w=0&k=20&c=m8gUYPVV1ZfWpfjrKjzWn-a8DVHnw1hGp-rjh6c40f0=", 
      description: "Boosts flexibility and balance.",
      calories: 90,
      hours: 0.4,
      benefits: "Enhances balance and flexibility"
    }
  ],
};

const Workout = () => {
  const location = useLocation();
  const category = location.state?.category || "Fit"; // Default to 'Fit'

  const workouts = workoutPlans[category] || workoutPlans["Fit"];

  const [showDetailsIndex, setShowDetailsIndex] = useState(null);

  const toggleDetails = (index) => {
    if (showDetailsIndex === index) {
      setShowDetailsIndex(null);
    } else {
      setShowDetailsIndex(index);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Suggested Workouts for {category}</h2>
      <div className="row">
        {workouts.map((workout, index) => (
<div className="col-md-4 mb-4 d-flex justify-content-center" key={index} style={{ flexDirection: 'column', padding: '0 15px' }}>
  <div className="card workout-card flex-fill d-flex flex-column" style={{ minHeight: '400px', width: '100%', maxWidth: '400px', overflow: 'hidden' }}>
    <img src={workout.image} className="card-img-top" alt={workout.name} style={{ objectFit: 'cover', height: '220px' }} />
    <div className="card-body d-flex flex-column justify-content-between" style={{ height: '200px', overflowY: 'auto' }}>
      <h5 className="card-title">{workout.name}</h5>
      <p className="card-text">{workout.description}</p>
      <button className="btn btn-primary btn-sm mt-2" onClick={() => toggleDetails(index)}>
        {showDetailsIndex === index ? "Hide Details" : "Show Details"}
      </button>
      {showDetailsIndex === index && (
        <div className="mt-2 text-muted" style={{ whiteSpace: 'normal' }}>
          <p>Calories burnt: {workout.calories}</p>
          <p>Hours: {workout.hours}</p>
          <p>Benefits: {workout.benefits}</p>
        </div>
      )}
    </div>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default Workout;
