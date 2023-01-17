import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="container ">
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: '#1c2331' }}
      >
        <section
          class="d-flex justify-content-between p-4"
          style={{ backgroundColor: '#6351ce' }}
        >
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </Link>
            <Link href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </Link>
            <Link href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </Link>
            <Link href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </Link>
            <Link href="" class="text-white me-4">
              <i class="fab fa-github"></i>
            </Link>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Company name</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: '60px',
                    backgroundColor: '#7c4dff',
                    height: '2px',
                  }}
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              {/* <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Products</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{"width: 60px; background-color: #7c4dff; height: 2px"}}
                />
                <p>
                  <Link href="#!" class="text-white">
                    MDBootstrap
                  </Link>
                </p>
                <p>
                  <Link href="#!" class="text-white">
                    MDWordPress
                  </Link>
                </p>
                <p>
                  <Link href="#!" class="text-white">
                    BrandFlow
                  </Link>
                </p>
                <p>
                  <Link href="#!" class="text-white">
                    Bootstrap Angular
                  </Link>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{"width: 60px; background-color: #7c4dff; height: 2px"}}
                />
                <p>
                  <Link href="#!" class="text-white">
                    Your Account
                  </Link>
                </p>
                <p>
                  <Link href="#!" class="text-white">
                    Become an Affiliate
                  </Link>
                </p>
                <p>
                  <Link href="#!" class="text-white">
                    Shipping Rates
                  </Link>
                </p>
                <p>
                  <Link href="#!" class="text-white">
                    Help
                  </Link>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{"width: 60px; background-color: #7c4dff; height: 2px"}}
                />
                <p>
                  <i class="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div> */}
            </div>
          </div>
        </section>

        <div
          class="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2020 Copyright:
          <Link class="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
