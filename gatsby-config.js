require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Welcome to your curriculum',
    author: 'Arthur Bernier Jr',
    currentYear: new Date().getFullYear(),
    description: 'An interactive website for mentorship clients',
    keywords: 'software engineer, software engineering, coding, javascript, html, css',
    navigationLinks: [
      { title: 'Home', slug: '/' },
      { title: 'Course Details', slug: '/course-details' },
      { title: 'Project Submissions', slug: '/projects' },
    ],
    homeworkSubmissionLink: {
      title: 'Submit Homework',
      href: '#'
    },
    homeworkSubmissionLinktwo: {
      title: 'See Class Schedule & Assigned Homework Links',
      href: '#'
    },
    exitTicketLink: {
      title: 'Submit Exit Ticket',
      href: '#'
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
