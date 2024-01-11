import React from "react";

const Contact = () => {
  return (
    <>
      <div class="">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="p-4 bg-light rounded-lg">
              <h1 class="text-3xl sm:text-4xl text-dark font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p class="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div class="d-flex align-items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                  style={{ height: 20 }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              <div class="d-flex align-items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                  style={{ height: 20 }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div>

              <div class="d-flex align-items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                  style={{ height: 20 }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  info@acme.org
                </div>
              </div>
            </div>
          </div>

          <form class="col-md-6 p-4">
            <div class="form-group">
              <label for="name" class="sr-only">
                Full Name
              </label>
              <input
                type="text"
                class="form-control mt-2"
                id="name"
                placeholder="Full Name"
              />
            </div>

            <div class="form-group mt-2">
              <label for="email" class="sr-only">
                Email
              </label>
              <input
                type="email"
                class="form-control mt-2"
                id="email"
                placeholder="Email"
              />
            </div>

            <div class="form-group mt-2">
              <label for="tel" class="sr-only">
                Number
              </label>
              <input
                type="tel"
                class="form-control mt-2"
                id="tel"
                placeholder="Telephone Number"
              />
            </div>

            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
