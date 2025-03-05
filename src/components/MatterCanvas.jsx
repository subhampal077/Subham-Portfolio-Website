import React, { useContext, useEffect, useRef } from "react";
import Matter from "matter-js";
import "matter-wrap";
import "matter-attractors";
import { ThemeContext } from "../contexts/ThemeContext";

function MatterCanvas() {
  const [darkMode] = useContext(ThemeContext);

  const containerRef = useRef(null);
  const matterContext = useRef(null);

  useEffect(() => {
    // Get container element from ref
    const container = containerRef.current;
    if (!container) return;

    // Get window dimensions
    const getDimensions = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Module aliases
    const Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Common = Matter.Common,
      Bodies = Matter.Bodies;

    // Enable plugins
    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    // Create engine and set gravity
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const dimensions = getDimensions();

    // Create renderer; note that we attach the canvas to the container div
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
        showVelocity: false,
      },
    });

    // Create runner
    const runner = Runner.create();

    // Set gravity scale to zero for demo scene
    engine.world.gravity.scale = 0;

    // Create an attractive, static body at the center of the canvas
    const attractiveBody = Bodies.circle(
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        isStatic: true,
        render: {
          fillStyle: "#000",
          strokeStyle: "#000",
          lineWidth: 0,
        },
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );
    World.add(engine.world, attractiveBody);

    // Add some bodies to be attracted
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, dimensions.width);
      const y = Common.random(0, dimensions.height);
      const s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Math.round(Common.random(3, 6));
      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.random() * Math.PI * 2,
        render: {
          fillStyle: "#222222",
          strokeStyle: "#000000",
          lineWidth: 2,
        },
      });
      World.add(engine.world, body);

      const r = Common.random(0, 1);
      const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3 ? "#27292d" : "#444444",
          strokeStyle: "#000000",
          lineWidth: 2,
        },
      });
      World.add(engine.world, circle1);

      const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? "#334443" : "#222222",
          strokeStyle: "#111111",
          lineWidth: 4,
        },
      });
      World.add(engine.world, circle2);

      const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: "#191919",
          strokeStyle: "#111111",
          lineWidth: 3,
        },
      });
      World.add(engine.world, circle3);
    }

    // Add mouse control to move the attractor body
    const mouse = Matter.Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", function () {
      if (!mouse.position.x || !mouse.position.y) return;
      // Smoothly translate the attractive body toward the mouse
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Run the engine and renderer
    Runner.run(runner, engine);
    Render.run(render);

    // Store the Matter context so we can clean up later if needed
    matterContext.current = { engine, runner, render };

    // Resize handling
    const handleResize = () => {
      const { width, height } = getDimensions();
      render.canvas.width = width;
      render.canvas.height = height;
      render.options.width = width;
      render.options.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div
      id="wrapper-canvas"
      className={`absolute inset-0 h-screen sm:bg-[#111] ${
        darkMode ? "bg-[#13141A]" : "bg-[#edf2f8]"
      }`}
      ref={containerRef}
    />
  );
}

export default MatterCanvas;
