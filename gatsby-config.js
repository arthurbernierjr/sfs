require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Welcome to SEIR Flex',
    author: 'Arthur Bernier Jr',
    currentYear: new Date().getFullYear(),
    description: 'An interactive website for students currently enrolled in the General Assembly Software Engineering Immersive Remote Flex Program',
    keywords: 'software engineer, software engineering, coding, javascript, html, css',
    navigationLinks: [
      { title: 'Home', slug: '/' },
      { title: 'Course Details', slug: '/course-details' },
      { title: 'Project Submissions', slug: '/projects' },
    ],
    homeworkSubmissionLink: {
      title: 'Submit Homework',
      href: 'https://forms.gle/tfN3Z2ukFTTFLoVm7'
    },
    homeworkSubmissionLinktwo: {
      title: 'See Class Schedule & Assigned Homework Links',
      href: 'https://docs.google.com/spreadsheets/d/1QaqwE3QXHiRQJmYGWH3NfJee6RDvNTFjCnzcC3JXOwM/edit?pli=1#gid=874083252'
    },
    exitTicketLink: {
      title: 'Submit Exit Ticket',
      href: 'https://forms.gle/iHoouYevM4yyyZXh6'
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-scroll-indicator',
      options: {
        color: '#dc143c',
        height: '4px',
        zIndex: '9999'
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'page-content',
        path: `${__dirname}/src/page-content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'Course Materials',
        path: `${__dirname}/src/course-materials`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '150'
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe'
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true
            },
            languageExtensions: [
              {
                language: 'superscript',
                extend: 'javascript',
                definition: {
                  superscript_types: /(SuperType)/
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/
                  }
                }
              }
            ]
          }
        ]
      }
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-breadcrumb',
      options: {
        defaultCrumb: {
          location: {
            pathname: '/'
          },
          crumbLabel: '/',
          crumbSeperator: ' / '
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'General Assembly - SEIR Flex Course Site',
        short_name: 'GA',
        description: 'Our Student-Facing website expressed as a progressive web app!',
        lang: 'en',
        display: 'standalone',
        icon: 'static/ga-logo.svg',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#dc143c'
      }
    },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     precachedPages: ['/']
    //   }
    // },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.js': [
            'cache-control: public, max-age=31536000, immutable'
          ],
          '/*.css': [
            'cache-control: public, max-age=31536000, immutable'
          ],
          '/sw.js': [
            'cache-control: public, max-age=0, must-revalidate'
          ],
          '/*.html': [
            'cache-control: public',
            'cache-control:  max-age=0',
            'cache-control: must-revalidate'
          ],
          '/**/*.html': [
            'cache-control: public',
            'cache-control:  max-age=0',
            'cache-control: must-revalidate'
          ],
          '/page-data/*': [
            'cache-control: public',
            'cache-control:  max-age=0',
            'cache-control: must-revalidate'
          ],
          '/static/*': [
            'cache-control: public, max-age=31536000, immutable'
          ]
        }
      }
    }
  ]
}
