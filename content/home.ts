import { WidgetModel } from "@lib/umbraco/types/widgetModel.type"

export const HomeContent : NodeJS.Dict<NodeJS.Dict<WidgetModel>> = {
    "banner": {
        "imageLeftAligned": {
            widget: 'Banner',
            variant: "Image",
            layout: 'LeftAligned',
            content: {
                text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulartor</h2>
                `,
                image: 'https://placehold.it/1774x974'
            }
        },
        "imageRightAligned": {
            widget: 'Banner',
            variant: "Image",
            layout: 'RightAligned',
            content: {
                text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulartor</h2>
                `,
                image: 'https://placehold.it/1774x974'
            }
        },
        "videoLeftAligned": {
            widget: 'Banner',
            variant: "Video",
            layout: 'LeftAligned',
            content: {
                text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulartor</h2>
                `,
                video: 'https://example.com/some-video.mp4'
            }
        },
        "videoRightAligned": {
            widget: 'Banner',
            variant: "Video",
            layout: 'RightAligned',
            content: {
                text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulartor</h2>
                `,
                video: 'https://example.com/some-video.mp4'
            }
        }
    },
    "carousel": {
        "boats": {
            widget: 'Carousel',
            variant: "Boats",
            layout: 'Standard',
            content: {
                builderLink: "https://google.com",
                items: [
                    {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '24xo',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "24' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '26xo',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "24' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '30xo',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "30' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '41',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "41' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '37',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "37' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '34',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "34' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '31',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "31' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '28',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "28' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }, {
                        "thumbnail": "https://placehold.it/640x740",
                        "detailsLink": "https://google.com",
                        "modelNumber": '23',
                        "stats": [
                            {
                                "name": "LOA",
                                "value": "23' 7\""
                            }, 
                            {
                                "name": "LOA w/ bracket & engines",
                                "value": "31' 3\""
                            }, 
                            {
                                "name": "Beam",
                                "value": "10' 5\""
                            }, 
                            {
                                "name": "Fuel Capicty",
                                "value": "400 gal"
                            }, 
                            {
                                "name": "Dry weight w/ engines",
                                "value": "20,000 lbs"
                            }
                        ]
                    }
                ]
            }
        },
        "text": {
            widget: 'Carousel',
            variant: "Text",
            layout: 'Standard',
            content: {
                items: [
                    {
                        "text" : `
                            <h3>Benefits of<br/><strong>center console boats</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        `,
                        "link": {
                            "label": "Learn More",
                            "url": "https://google.com"
                        },
                        "background": "https://placehold.it/1774x544"
                    }, {
                        "text" : `
                            <h3>Things about<br/><strong>center console boats</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        `,
                        "link": {
                            "label": "View All",
                            "url": "https://google.com"
                        },
                        "background": "https://placehold.it/1774x544"
                    }, {
                        "text" : `
                            <h3>Other bits<br/><strong>center console boats</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        `,
                        "link": {
                            "label": "Contact Us",
                            "url": "https://google.com"
                        },
                        "background": "https://placehold.it/1774x544"
                    }
                ]
            }
        }
    },
    "cta": {
        "flyIn": {
            widget: 'Cta',
            variant: "FlyIn",
            layout: 'Standard',
            content: {
                "title": "It's a regulator thing",
                "image": "https://placehold.it/1920x1280",
                "text": `
                    <h2>Be part of the<br/><strong>regulator community</strong></h2>
                `,
                "link": {
                    "icon": "fa-calendar",
                    "url": "https://google.com",
                    "label": "View <strong>events & boat shows</strong>"
                }
            }
        }
    },
    "dealerSearch": {
        "startJourney": {
            widget: 'DealerSearch',
            variant: "Standard",
            layout: 'Standard',
            content: {
                "background": "https://placehold.it/1920x1280",
                "text": `
                    <h2><strong>Start Your Journey</strong></h2>
                    <h3>Find your <strong>dealer</strong>
                `,
                "searchPlaceholder": "Enter Zipcode",
                "searchTarget": "https://google.com"
            }
        }
    },
    "feed": {
        "blog": {
            widget: 'Feed',
            variant: "Blog",
            layout: 'Row',
            content: {
                items: [{
                    "thumbnail": "https://placehold.it/640x992",
                    "tag": 'Center console boats 101',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }, {
                    "thumbnail": "https://placehold.it/640x992",
                    "tag": 'Topic Tag',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }, {
                    "thumbnail": "https://placehold.it/640x992",
                    "tag": 'Topic tag',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }]
            }
        }
    },
    "hotspots": {
        "leftAligned": {
            widget: 'Hotspots',
            variant: "Standard",
            layout: 'LeftAligned',
            content: {
                background: 'https://placehold.it/x278x857',
                hotspots: [{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                }]
            }
        },
        "rightAligned": {
            widget: 'Hotspots',
            variant: "Standard",
            layout: 'RightAligned',
            content: {
                background: 'https://placehold.it/x278x857',
                hotspots: [{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                },{
                    "thumbnail": "https://placehold.it/856x461",
                    "secondaryImage": "https://placehold.it/138x232",
                    "name": 'Power performance',
                    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    "hotspotX" : 25.5,
                    "hotspotY": 90
                }]
            }
        }
    },
    "pinnedLinks": {
        "top": {
            widget: 'PinnedLinks',
            variant: "Standard",
            layout: 'Top',
            content: {
                links: [{
                    icon: "fa-anchor",
                    label: "<strong>Build</strong> your boat",
                    url: "https://google.com"
                },{
                    icon: "fa-brochure",
                    label: "View <strong>Brochures</strong>",
                    url: "https://google.com"
                },{
                    icon: "fa-marker",
                    label: "Find your <strong>dealer</strong>",
                    url: "https://google.com"
                }]
            }
        },
        "bottom": {
            widget: 'PinnedLinks',
            variant: "Standard",
            layout: 'Bottom',
            content: {
                links: [{
                    icon: "fa-anchor",
                    label: "<strong>Build</strong> your boat",
                    url: "https://google.com"
                },{
                    icon: "fa-brochure",
                    label: "View <strong>Brochures</strong>",
                    url: "https://google.com"
                },{
                    icon: "fa-marker",
                    label: "Find your <strong>dealer</strong>",
                    url: "https://google.com"
                }]
            }
        }
    },
    "slideshow": {
        "standard": {
            widget: 'Slideshow',
            variant: "Standard",
            layout: 'Standard',
            content: {
                staticText: `
                    <h2>Built for</h2>
                `,
                items: [{
                    background: "https://placehold.it/1920x1080",
                    subject: "Fishing",
                    videoThumbnail: "https://placehold.it/360x215",
                    video: "https://example.com/video.mp4",
                    link: {
                        label: "View <strong>fishing features</strong>",
                        url: "https://google.com"
                    }
                }, {
                    background: "https://placehold.it/1920x1080",
                    subject: "Leisure",
                    videoThumbnail: "https://placehold.it/360x215",
                    video: "https://example.com/video.mp4",
                    link: {
                        label: "View <strong>leisure features</strong>",
                        url: "https://google.com"
                    }
                }, {
                    background: "https://placehold.it/1920x1080",
                    subject: "Durability",
                    videoThumbnail: "https://placehold.it/360x215",
                    video: "https://example.com/video.mp4",
                    link: {
                        label: "View <strong>our standards</strong>",
                        url: "https://google.com"
                    }
                }, {
                    background: "https://placehold.it/1920x1080",
                    subject: "Entertaining",
                    videoThumbnail: "https://placehold.it/360x215",
                    video: "https://example.com/video.mp4",
                    link: {
                        label: "View <strong>our features</strong>",
                        url: "https://google.com"
                    }
                }, {
                    background: "https://placehold.it/1920x1080",
                    subject: "You",
                    link: {
                        label: "Build your <strong>dream boat</strong>",
                        url: "https://google.com"
                    }
                }]
            }
        }
    },
    "text": {
        "theFinest": {
            widget: 'Text',
            variant: "Standard",
            layout: 'Narrow',
            content: {
                text: `
                    <h2>The finest</h2>
                    <h3>in offshore sportsfishing boats</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                `
            }
        },
        "aboveTheRest": {
            widget: 'Text',
            variant: "Standard",
            layout: 'Narrow',
            content: {
                text: `
                    <h3>What puts Regulator</h3>
                    <h2>above the rest</h2>
                    <p>
                        <a class="button" href="https://google.com">Why <strong>Regulator</strong></a>
                    </p>
                `
            }
        },
        "knowledge": {
            widget: 'Text',
            variant: "Standard",
            layout: 'Narrow',
            content: {
                text: `
                    <h3>Unleashing the power of</h3>
                    <h2><strong>knowledge</strong></h2>
                    <p>
                        <a class="button" href="https://google.com">View <strong>Resources</strong></a>
                    </p>
                `
            }
        },
    },
    "textColumns": {
        "unmatchedQuality": {
            widget: 'TextColumns',
            variant: "Standard",
            layout: 'ThinDivider',
            content: {
                items: [{
                    text: `
                        <h5><strong>Unmatched quality</strong><br/>over 30 years of expertise</h5>
                    `
                }, {
                    text: `
                        <h5><strong>Design</strong><br/>award winning center consoles</h5>
                    `
                }, {
                    text: `
                        <h5><strong>Source</strong><br/>best in class materials</h5>
                    `
                }]
            }
        },
        "featuresAndCapabilities": {
            widget: 'TextColumns',
            variant: "Standard",
            layout: 'ThickDivider',
            content: {
                items: [{
                    text: `
                        <h3>What <strong>features & capabilities</strong> do you find important?</h3>
                    `
                }, {
                    text: `
                        <h2>Let us help you find</h2>
                        <h1>The perfect boat</h1>
                        <p>Answer a few questions, and we'll recommend models that fits your needs.</p>
                        <a class="button">Boat <strong>selector</strong></a>
                    `
                }]
            }
        }
    },
    "videoScroll": {
        "standard": {
            widget: 'Video',
            variant: "Standard",
            layout: 'ThickDivider',
            content: {
                upperText: `
                    <h3>Perfor exploring</h3>
                    <h1><strong>Above the water</strong></h1>
                `,
                lowerText: `
                    <h1>And <strong>below</strong></h1>
                `,
                backgroundVideo: "https://example.com/video.mp4",
                videoThumbnail: "https://placehold.it/640x369",
                video: "https://example.com/example.mp4"
            }
        }
    }
}