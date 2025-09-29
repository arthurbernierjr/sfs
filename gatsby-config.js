require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Welcome to your curriculum',
    author: 'Arthur Bernier Jr',
    currentYear: new Date().getFullYear(),
    description: 'An interactive website for the InternXL Innovation Challenge',
    keywords: 'ai, innovation, challenge, internxl, vibe coding',
    navigationLinks: [
      { title: 'Home', slug: '/' },
      { title: 'Course Details', slug: '/course-details' },
      { title: 'Orientation', slug: '/orientation' },
      { title: 'Session 1', slug: '/session1' },
      { title: 'Session 2', slug: '/session2' },
      { title: 'Session 3', slug: '/session3' },
      { title: 'Session 4', slug: '/session4' },
      { title: 'Session 5', slug: '/session5' }
    ],
    homeworkSubmissionLink: {
      title: '',
      href: '#'
    },
    homeworkSubmissionLinktwo: {
      title: '',
      href: '#'
    },
    exitTicketLink: {
      title: '',
      href: '#'
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-scroll-indicator',
      options: {
        color: '#d3d3d3',
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
        name: 'InternXL Website for Innovation Challenge',
        short_name: 'SV',
        description: 'Our Student-Facing website expressed as a progressive web app!',
        lang: 'en',
        display: 'standalone',
        icon: 'static/internxl.png',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#d3d3d3'
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
