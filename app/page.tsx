"use client";

import React, { useState } from "react";

export default function Home() {
  const questions = [
    {
      statement: "Do you like to listen and ask questions?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Are you comfortable with ambiguity?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
          "Quality Assurance": 1,
        },
      },
    },
    {
      statement:
        "Can you facilitate group sessions using techniques to mitigate social biases?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
          "IT Support & Access Management": 1,
        },
      },
    },
    {
      statement:
        "Can you present your findings in a way to make it understandable to your audience?",
      options: {
        Yes: {
          "Product & Requirements Management": 2,
        },
        No: {
          "Software Engineer": 1,
          "Quality Assurance": 1,
        },
      },
    },
    {
      statement: "Are you eager to continually improve your skills?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Software Engineer": 1,
        },
        No: {
          "IT Support & Access Management": 1,
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Do you have an eye for detail?",
      options: {
        Yes: {
          "Quality Assurance": 2,
          "User Centered Design": 1,
        },
        No: {
          "Software Engineer": 1,
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Are you interested in automating repetitive tasks?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Product & Requirements Management": 1,
        },
      },
    },
    {
      statement:
        "Are you interested in knowing about different systems and software companies use?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "IT Support & Access Management": 1,
        },
        No: {
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement:
        "Are you good at thinking of the worst case scenario and how to avoid it?",
      options: {
        Yes: {
          "Quality Assurance": 2,
          "Agile & Delivery Leadership": 1,
        },
        No: {
          "Software Engineer": 1,
          "Product & Requirements Management": 1,
        },
      },
    },
    {
      statement: "Do you like making things work better?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Product & Requirements Management": 1,
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Do you have a good feel for user experience?",
      options: {
        Yes: {
          "User Centered Design": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
          "Quality Assurance": 1,
        },
      },
    },
    {
      statement: "Do you observe things closely and give honest feedback?",
      options: {
        Yes: {
          "Product & Requirements Management": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Are you curious about how things work and new technologies?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "User Centered Design": 1,
        },
        No: {
          "IT Support & Access Management": 1,
        },
      },
    },
    {
      statement: "Do you always ask 'why'?",
      options: {
        Yes: {
          "Product & Requirements Management": 2,
        },
        No: {
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Do you like to organize and bring order to things?",
      options: {
        Yes: {
          "Product & Requirements Management": 2,
          "Agile & Delivery Leadership": 1,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Do you like to be an expert in specific areas?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "IT Support & Access Management": 1,
        },
        No: {
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Do you enjoy interacting with diverse groups of people?",
      options: {
        Yes: {
          "Product & Requirements Management": 2,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Can you give constructive and positive feedback?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
        },
        No: {
          "IT Support & Access Management": 1,
        },
      },
    },
    {
      statement: "Do you like analyzing data?",
      options: {
        Yes: {
          "Product & Requirements Management": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Do you think critically, creatively, and enjoy exploring?",
      options: {
        Yes: {
          "User Centered Design": 2,
          "Software Engineer": 1,
        },
        No: {
          "IT Support & Access Management": 1,
        },
      },
    },
    {
      statement:
        "Do you enjoy figuring out solutions and understanding issues?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Product & Requirements Management": 1,
        },
      },
    },
    {
      statement: "Do you enjoy helping and teaching others?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Do you think logically and follow processes?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "IT Support & Access Management": 1,
        },
        No: {
          "User Centered Design": 1,
        },
      },
    },
    {
      statement: "Can you identify and recommend improvements?",
      options: {
        Yes: {
          "Quality Assurance": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Do you enjoy collaborating with others?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
        },
      },
    },
    {
      statement: "Do you enjoy solving problems and challenges?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Product & Requirements Management": 1,
        },
      },
    },
    {
      statement: "Do you enjoy diving deep into new subjects?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "User Centered Design": 1,
        },
        No: {
          "IT Support & Access Management": 1,
        },
      },
    },
    {
      statement: "Are you curious about how popular apps work?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Do you enjoy setting and achieving milestones in a project?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
          "IT Support & Access Management": 1,
        },
      },
    },
    {
      statement:
        "Do you have a knack for understanding user needs and designing solutions around them?",
      options: {
        Yes: {
          "User Centered Design": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
          "Quality Assurance": 1,
        },
      },
    },
    {
      statement:
        "Do you enjoy ensuring that IT systems are up and running smoothly?",
      options: {
        Yes: {
          "IT Support & Access Management": 2,
        },
        No: {
          "Software Engineer": 1,
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement:
        "Are you interested in managing user identities and access rights?",
      options: {
        Yes: {
          "IT Support & Access Management": 2,
        },
        No: {
          "Software Engineer": 1,
          "User Centered Design": 1,
        },
      },
    },
    {
      statement:
        "Do you like to ensure that software releases meet quality standards?",
      options: {
        Yes: {
          "Quality Assurance": 2,
        },
        No: {
          "Software Engineer": 1,
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement:
        "Do you enjoy facilitating workshops and brainstorming sessions?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Product & Requirements Management": 1,
        },
        No: {
          "Software Engineer": 1,
          "Quality Assurance": 1,
        },
      },
    },
    {
      statement: "Do you like to keep up with the latest technological trends?",
      options: {
        Yes: {
          "Software Engineer": 2,
          "User Centered Design": 1,
        },
        No: {
          "IT Support & Access Management": 1,
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Are you good at managing and mitigating risks?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
          "Quality Assurance": 1,
        },
        No: {
          "Software Engineer": 1,
          "User Centered Design": 1,
        },
      },
    },
    {
      statement:
        "Do you enjoy understanding and mapping out business processes?",
      options: {
        Yes: {
          "Product & Requirements Management": 2,
        },
        No: {
          "Software Engineer": 1,
          "Quality Assurance": 1,
        },
      },
    },
    {
      statement:
        "Do you like to ensure that users have the right permissions to access specific resources?",
      options: {
        Yes: {
          "IT Support & Access Management": 2,
        },
        No: {
          "Software Engineer": 1,
          "Agile & Delivery Leadership": 1,
        },
      },
    },
    {
      statement: "Are you interested in creating user-friendly interfaces?",
      options: {
        Yes: {
          "User Centered Design": 2,
        },
        No: {
          "Software Engineer": 1,
          "Quality Assurance": 1,
        },
      },
    },
    {
      statement: "Do you enjoy coordinating and managing project deliveries?",
      options: {
        Yes: {
          "Agile & Delivery Leadership": 2,
        },
        No: {
          "Software Engineer": 1,
          "IT Support & Access Management": 1,
        },
      },
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rolePoints, setRolePoints] = useState({
    "Agile & Delivery Leadership": 0,
    "Quality Assurance": 0,
    "Software Engineer": 0,
    "Product & Requirements Management": 0,
    "User Centered Design": 0,
    "IT Support & Access Management": 0,
    // ... other roles ...
  });

  const [showResult, setShowResult] = useState(false);
  const [finalRole, setFinalRole] = useState("");

  const renderProgressBars = () => {
    const totalPoints = questions.length * 2; // Maximum possible points for a role
    return Object.keys(rolePoints).map((role) => {
      const percentage = (rolePoints[role] / totalPoints) * 100;
      return (
        <div key={role} className="my-2">
          <div className="text-left font-bold">{role}</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      );
    });
  };

  const renderQuestionProgressBar = () => {
    const totalQuestions = questions.length;
    const progressPercentage =
      ((currentQuestionIndex + 1) / totalQuestions) * 100;

    return (
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 my-4">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };

  const handleAnswer = (answer) => {
    const selectedOptions = questions[currentQuestionIndex].options[answer];

    // Update role points
    const updatedPoints = { ...rolePoints };
    for (const role in selectedOptions) {
      updatedPoints[role] += selectedOptions[role];
    }
    setRolePoints(updatedPoints);

    // Move to next question or show result
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate and show result
      let maxPoints = 0;
      let bestRole = "";
      for (const role in updatedPoints) {
        if (updatedPoints[role] > maxPoints) {
          maxPoints = updatedPoints[role];
          bestRole = role;
        }
      }
      setFinalRole(bestRole);
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Role Quiz</h1>
        <p className="text-lg text-gray-600">
          Find out which role suits you best!
        </p>
      </header>

      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {renderQuestionProgressBar()}

        {!showResult ? (
          <div className="space-y-4">
            <div className="bg-indigo-100 text-indigo-800 rounded-xl p-4 text-center">
              <p className="text-xl font-semibold">
                {questions[currentQuestionIndex].statement}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleAnswer("Yes")}
                className="py-2 px-4 rounded bg-blue-500 text-white"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer("No")}
                className="py-2 px-4 rounded bg-red-500 text-white"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-2xl text-gray-800">
              Your best-suited role is: <strong>{finalRole}</strong>
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-lg text-gray-700">
                Role Points Breakdown:
              </h3>
              {renderProgressBars()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
