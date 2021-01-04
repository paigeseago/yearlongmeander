var config = {
    style: 'mapbox://styles/paigeseago/ckjd9ckn46dpn1ao2qsj3tpxt',
    accessToken: 'pk.eyJ1IjoicGFpZ2VzZWFnbyIsImEiOiJja2oxbmt2a2EwcDJwMnpsbngxc2J3cGw5In0.Gpjh_eF-d-6N1jZotssMzQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Yearlong Meander Across the US',
    subtitle: 'A journey through 19 states by bicycle',
    byline: 'By Paige Seago',
    //footer: 'Source: source citations, etc.',
    chapters: [
    {
            id: 'ro',
            alignment: 'full',
            hidden: false,
            title: 'Route Overview',
            //image: './path/to/image/source.png',
            description: 'Below is a map of the routes I rode, along with my long-time boyfriend Josh, between November 2019 and October 2020. Although we had initially planned a simple east to west ride across the country, 2020 had other plans in store. Hidden within this jumbled series of lines are a year\'s worth of stories of adventure and mishaps, of moving from Plan A to Plan B, then Plans C, D, and so on until we weren\'t even sure what plan we were on anymore. Despite the chaos we had an amazing adventure and felt very lucky to be able to experience traveling our country in a year like no other.',
            location: {
                center: [-97.45054, 37.54865],
                zoom: 3.23,
                pitch: 45,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                 //{
                 //    layer: 'Part-2',
                 //    opacity: 1
                 // }
            ]
        },
        {
            id: 'p1',
            alignment: 'right',
            hidden: false,
            title: 'Part 1: The Southeast',
            //image: './path/to/image/source.png',
            description: 'In November 2019 Josh and I set out on a bicyle trip from western North Carolina to his hometown of Austin, TX. I had never attempted a bicycle tour before so I was excited but also a little nervous. Luckily the first leg of our trip went well. We were able to visit with family in Athens, GA after only 3 days of riding. We waited out a cold rainy spell there, then continued on through Atlanta and made our way into Alabama on the Silver Comet Trail/Chief Ladiga Trail, a 95 mile pedestrian and bicycle route which follows old rail grades. We summited Mt. Cheaha, the highest point in Alabama at only 2411\', and visited the state capitol in Montgomery. In Florida we reached the Gulf Coast just east of Pensacola, and made our way westward, spending Thanksgiving in Mississippi. Upon reaching New Orleans we stayed in a fun hostel for a few days, then made a side trip to the Mississippi delta. We ate satsumas and boudin sausage all the way across Cajun country and enjoyed checking out the Tabasco Sauce factory in Avery Island, Louisiana. By the time we reached Texas we were making good time and east Texas passed in a blur, other than a day\'s layover spent catching up with old friends in Houston. At last we made it to Austin with a few days to spare before Christmas.',
            location: {
                center: [-83.47267, 33.23336],
                zoom: 4.72,
                pitch: 15,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 0,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-3',
                     opacity: 1
                 }
            ]
        },

        {
            id: 'p1a',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_5327.jpg',
            description: '<center>Sunset at Blackrock Mountain State Park, GA, on the first night of our trip. November 9, 2019.</center>',
            location: {
                center: [-83.47267, 33.23336],
                zoom: 4.72,
                pitch: 15,
                bearing: 0
            },
            marker: {
                center: [-83.402666, 34.929675],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 0,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-3',
                     opacity: 1
                 }
            ]
        },

        {
            id: 'p1b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_5723.jpg',
            description: '<center>The sprawling live oaks of New Orleans provide many good limbs for hanging swings. December 6, 2019.</center>',
            location: {
                center: [-83.47267, 33.23336],
                zoom: 4.72,
                pitch: 15,
                bearing: 0
            },
            marker: {
                center: [-90.083268, 30.022843],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 0,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-3',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'p1c',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_5761.jpg',
            description: '<center>View of the Austin skyline from Lady Bird Lake. January 11, 2020.</center>',
            location: {
                center: [-83.47267, 33.23336],
                zoom: 4.72,
                pitch: 15,
                bearing: 0
            },
            marker: {
                center: [-97.746653, 30.262212],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 0,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-3',
                     opacity: 1
                 }
            ]
        },

        {
            id: 'p2',
            alignment: 'left',
            hidden: false,
            title: 'Part 2: Tex(New)Mex Treks',
            image: '',
            description: 'After a long holiday break we resumed biking west from Austin in late January. San Antonio was the next major city on our route, and we enjoyed visiting the famous River Walk and meeting up with friends and family. After that we wove through the cedar covered crags of the Hill Country, then emerged into the wide dry plains of West Texas. We stopped to explore the peaks and deserts at Texas\'s two national parks, Big Bend and Guadalupe Mountains, then crossed into New Mexico and delved into the depths of a third national park, Carlsbad Caverns. New Mexico offered more amazing scenery, from forested mountains to the dunes of White Sands National Park. We were staying with a host in Las Cruces (around March 12-13) when we first started to realize that the Covid-19 virus was turning into a big deal. We continued on for several more days through the remote Gila National Forest, with stops to check out cliff dwellings and hot springs, before coming to the next significant town of Silver City. Covid-19 was still spreading out of control and the first lock-downs were coming into effect in California. After binge reading the news for a couple of days we made the difficult decision to cancel the trip for the time being. Luckily we were able to rent a pick-up truck and transport our gear and ourselves back to western North Carolina. We\'d already bought three days worth of food in Silver City and it was a surreal drive, with no stops other than unavoidable gas stations and remote campgrounds.',
            location: {
                center: [-106.47264, 31.48752],
                zoom: 5.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },

        {
            id: 'p2a',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_6112.jpg',
            description: '<center>Heavy clouds over Big Bend National Park. February 11, 2020.</center>',
            location: {
                center: [-99.47264, 31.48752],
                zoom: 5.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-103.433000, 29.182993],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: [
                 {
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },
{
            id: 'p2b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_6486.jpg',
            description: '<center>White Sands National Park. March 11, 2020.</center>',
            location: {
                center: [-99.47264, 31.48752],
                zoom: 5.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-106.261877, 32.807225],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: [
                 {
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },
{
            id: 'p2c',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_6505.jpg',
            description: '<center>Spring wildflowers in the Organ Mountains, New Mexico. March 12, 2020.</center>',
            location: {
                center: [-99.47264, 31.48752],
                zoom: 5.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-106.525377, 32.438186],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: [
                 {
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },

        {
        	id: 'pi',
            alignment: 'right',
            hidden: false,
            title: 'Covid-19 Intermission',
            image: '',
            description: 'From late March until early June we lived in Cullowhee, NC. At first we stayed with my mom and her husband but after a while we got a short term rental in a duplex behind Western Carolina University. I debated getting a job but we still had savings left and were hoping to get back on the road eventually depending on how things played out. Instead I spent my time gardening, baking, and hiking abandoned logging roads in the nearby Nantahala National Forest. Josh and I spent a lot of time discussing if and when to resume our tour. As more research became available we learned that the riskiest situations for Covid transmission are indoors in crowded, poorly ventilated areas. Given that the vast majority of our time on the bicycle tour was spent outside in socially distant conditions we began to feel more confident about resuming our trip. We reasoned that as long as we took precautions such as wearing masks in businesses and avoiding crowded areas we would have a low risk of catching the disease and an even lower risk of spreading it to anyone else.',
            location: {
                center: [-83.15415, 35.34908],
                zoom: 8.71,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-83.178912, 35.324750],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 0,
                 },
                 ],
            onChapterExit: [
                 {
                     layer: 'Part-6',
                     opacity: 1,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 1,
                 },
                 ]
        },
        {
        	id: 'p3',
            alignment: 'left',
            hidden: false,
            title: 'Part 3: Kentucky Spur',
            image: '',
            description: 'By late May stay at home orders had ended, businesses were gradually reopening, and Covid cases were decreasing for the time being. Josh and I decided to do a weeklong mini-tour and see how it went. My sister was moving from Lexington, KY, where she had worked the past couple of years, to Winston Salem, NC, where she would be starting grad school in the fall. We were able to catch a ride up to Lexington with her during one of her moving trips, then ride our bikes back to North Carolina. On our first day we quickly passed out of the city and rode through miles of horse pastures in Kentucky\'s bluegrass region. Soon we entered the hillier territory of southeastern Kentucky, with stops in the Daniel Boone National Forest and Cumberland Gap National Historic Park. We crossed out of Kentucky and briefly crossed the extreme tip of Virginia for only 1 mile. (When I say we biked through 19 states I do include Virginia, through it feels like a bit of a cheat). We plowed ahead through Tennessee and made our way to Great Smoky Mountains National Park. There we had the amazing experience of viewing synchronous fireflies which are endemic to the area and only emerge each year for a couple of weeks in early June. We faced a difficult climb over the crest of the Smokies, then made our way back to our temporary rental. Following the success of this trip, it was now time to quickly move our few belongings back into storage, as we had bigger plans on the horizon.',
            location: {
                center: [-84.88847, 36.99462],
                zoom: 6.32,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },
        {
        	id: 'p3a',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_6789.jpg',
            description: '<center>A nest of baby robins at our campsite in Berea, KY. June 3, 2020.</center>',
            location: {
                center: [-84.88847, 36.99462],
                zoom: 6.32,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-84.323835, 37.563987],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },
        {
        	id: 'p3b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_6798.jpg',
            description: '<center>An unanticipated positive outcome of the pandemic: Josh joining widespread family members via Zoom to play boggle while at a rural campsite near Middlesboro, KY. June 5, 2020.</center>',
            location: {
                center: [-84.88847, 36.99462],
                zoom: 6.32,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [ -83.712238, 36.627055],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },
        {
        	id: 'p3c',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_6823.jpg',
            description: '<center>A rhododendron flanked stream in Great Smoky Mountains National Park, TN. June 7, 2020.</center>',
            location: {
                center: [-84.88847, 36.99462],
                zoom: 6.32,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-83.581299, 35.651462],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-6',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1
                 },
            ]
        },
        {
        	id: 'p4',
            alignment: 'left',
            hidden: false,
            title: 'Part 4: The Pacific Coast',
            image: '',
            description: 'For the next leg of our journey we added two additional riders, my sister Elayna, who had two months free before beginning grad school, and her then boyfriend Trey. This would be their first bicycle tour, and rather than picking up in a hot, remote section of the arid southwest we decided to follow the Pacific Coast south from Seattle, a route which had been highly recommended to us. We drove across the country in a rented pick-up truck (again) and crashed with Josh\'s friends for a couple of days upon arriving in Seattle. From there we ferry hopped over to the Olympic Peninsula, then wound our way around the perimeter of the peninsula and south along the coast. Along the way we saw snowcapped mountains and record setting trees, and celebrated the 4th of July in the small oyster fishing village of Bay Center. We crossed the Columbia River to Astoria, Oregon and pedaled upstream along the river to Portland, where I was able to meet up with a good friend from high school. From there we returned to the coast and enjoyed the amazing sea stacks and crashing waves for which the Oregon Coast is famous. In northern California we visited the redwoods and swam in the Eel River, which was far more inviting than its name might suggest. Elayna and Trey left us in San Francisco to return back east while Josh and I continued south through the Big Sur. We passed rich agricultural lands and historic missions and glimpsed dolphins from the road as we pedaled along by the sea. Finally we reached Los Angeles, where we camped in Josh\'s Aunt Janie\'s back yard for a few days. We visited the neighborhood where he had spent several years of his childhood and considered our options for continuing forward.',
            location: {
                center: [-124.23627, 41.25699],
                zoom: 4.29,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
            ]
        },
        {
        	id: 'p4a',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '../IMG_7057.jpg',
            description: '<center>Having fun with panoramas and my sister Elayna in Gasworks Park, Seattle, WA. June 22, 2020.</center>',
            location: {
                center: [-124.23627, 41.25699],
                zoom: 4.29,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-122.333639, 47.645984],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
            ]
        },
        {
        	id: 'p4b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_0403.jpg',
            description: '<center>Yaquina Head Lighthouse in Oregon. (I crushed my phone while scrambling on some sea rocks in northern Oregon, so this photo is courtesy of Josh.) July 12, 2020.</center>',
            location: {
                center: [-104.23627, 41.25699],
                zoom: 4.29,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-124.077593, 44.675688],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-6',
                     opacity: 0,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 1,
                 },
                 {
                     layer: 'Part-6',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p4c',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_8808.jpg',
            description: '<center>On the beach near Santa Barbara, CA. August 11, 2020.</center>',
            location: {
                center: [-104.23627, 41.25699],
                zoom: 4.29,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [ -119.681022, 34.414712],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 0,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-6',
                     opacity: 0,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
                 {
                     layer: 'Part-3',
                     opacity: 1,
                 },
                 {
                     layer: 'Part-6',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p4d',
            alignment: 'full',
            hidden: false,
            title: 'Out of the Frying Pan and into the Fire',
            image: '',
            description: 'In LA we debated whether to continue eastward, as had been our initial plan. We still wanted to reconnect to our old route in New Mexico but it was mid August with temperatures hovering around 115 degrees over a wide swath of the southern California desert. We decided to take a more northerly route instead and booked train tickets to Oakland. Within a couple of days there was a major lightning storm, spawning numerous wildfires around the bay area and across northern California. We could see flames on the hillsides from our train as we sped northwards. We got a hotel room upon arriving in Oakland. In the morning we read that the LNU fire had forced an emergency overnight evacuation in Vacaville, a town which was only two days away on our planned route.',
            location: {
                center: [-107.61188, 35.91253],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-4',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p4e',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_8979.jpg',
            description: '<center>Hazy skies lit up pink well before sunset due to all the smoke in the air. Photo is from a train stop in Salinas, CA, near where we saw the River Fire burning from our train windows. August 18, 2020.</center>',
            location: {
                center: [-107.61188, 35.91253],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-121.65650, 36.679318],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-4',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p5',
            alignment: 'right',
            hidden: false,
            title: 'Part 5: Desert Ramblings',
            image: '',
            description: 'We modified our route for the first few days, heading east through the delta before turning north to Sacramanto. There was an unhealthy amount of smoke in the air and we pushed across the Sierras quickly in an effort to put distance between ourselves and the still rapidly expanding fires. Soon we were in Nevada, which unexpectedly turned out to be one of my favorite states of the whole trip. I enjoyed the solitude of the vast sagebrush valleys separated by chain after chain of parallel mountains. We saw petroglyphs, wild mustangs and burros, ancient bristlecone pines, and too many varieties of lizards to count. In Utah we did a tour of several well known national parks, including Zion, Bryce Canyon, Capitol Reef, and Arches. Each park had its own distinct character, each with unique and breathtaking geology. From Utah we crossed into Colorado, where we encountered fine hospitality from the locals. In Durango we spent a night sleeping on the roof of a repurposed middle school owned by a family we met through warmshowers, a website dedicated to connecting bicycle tourists with hosts. Then in Bayfield, the next town down the road, we were unexpectedly invited to enjoy a home cooked meal and camp in the backyard by another family. We were required to get Covid tested prior to entering New Mexico and spent our first few nights there wild camping in the national forest and avoiding contact until we received our results. We passed through the state much more quickly this time than the first, and reconnected with our old route in the small town of Carrizozo. However, we couldn\'t just stop there! We continued on to El Paso, as a car rental would be significantly more economical there than in rural New Mexico.',
            location: {
                center: [-107.61188, 35.91253],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-4',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p5a',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_9076.jpg',
            description: '<center>Josh stands on a boulder overlooking Silver Lake in the Eldorado National Forest, California. Even with all the smoke in the air this was a beautiful spot. August 23, 2020.</center>',
            location: {
                center: [-107.61188, 35.91253],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-120.122476, 38.665521],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-4',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p5b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_9300.jpg',
            description: '<center>Wild burros drinking from a runoff pool at Spencer Hot Springs, NV. August 29, 2020.</center>',
            location: {
                center: [-107.61188, 35.91253],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-116.858592, 39.3271131],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-4',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p5c',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_9795.jpg',
            description: '<center>Climbing Smithsonian Butte Rd south of Zion National Park. Of course this photo isn\'t representative of the average terrain we traversed. If it was we\'d still be out there! September 12, 2020.</center>',
            location: {
                center: [-107.61188, 35.91253],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-113.057691, 37.143536],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-4',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p5d',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_0995.jpg',
            description: '<center>Lower Calf Creek Falls in Grand Staircase-Escalante National Monument, UT. September 18, 2020.</center>',
            location: {
                center: [-107.61188, 35.91253],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-111.419961, 37.828977],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-4',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-2',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-5',
                     opacity: 1
                 },
                 {
                     layer: 'Part-2',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p6',
            alignment: 'left',
            hidden: false,
            title: 'Part 6: We Just Had to Tag the Atlantic',
            image: '',
            description: 'For all intents and purposes we had accomplished the goal we\'d set out to. However, it was hard to let go of the trip and it nagged at me that we hadn\'t <i>officially</i> completed a cross country ride, given that we\'d started in western North Carolina. Josh and I decided to cap it off with a victory lap of sorts, a one week ride down to the South Carolina coast. We viewed waterfalls and gorges as we descended out of the mountains and biked into Greenville on a fun bike trail called the Swamp Rabbit. We rode on through the capital city of Columbia, then camped in Congaree National Park, where we were attacked by voracious mosquitos. (This actually served to remind me how mercifully few mosquitos there had been over the summer in the drier western states). It was easy riding from there down to Charleston, a city which draws me back time and time again. We spent two nights camping in a county park close to the city, where we were joined by my mom and sister. I was extremely thankful that they\'d agreed to come pick us up, even if it was under the guise of a beach vacation.  ',
            location: {
                center: [-83.52882, 34.07023],
                zoom: 6.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p6a',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_0688.jpg',
            description: '<center>Reedy River Falls in downtown Greenville, SC. October 24, 2020.</center>',
            location: {
                center: [-83.52882, 34.07023],
                zoom: 6.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-82.401275, 34.844896],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p6b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_0742.jpg',
            description: '<center>A boardwalk through the swamps of Congaree National Park. October 27, 2020.</center>',
            location: {
                center: [-83.52882, 34.07023],
                zoom: 6.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-80.818224, 33.826471],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
        {
        	id: 'p6c',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '../IMG_0824.jpg',
            description: '<center>The firm sands of Folly Beach provided an excellent bicycling surface and these spooky Halloween skies were an added bonus. October 31, 2020.</center>',
            location: {
                center: [-83.52882, 34.07023],
                zoom: 6.43,
                pitch: 0,
                bearing: 0
            },
            marker: {
                center: [-79.934229, 32.656405],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 0.5,
                 },
                 {
                     layer: 'Part-1',
                     opacity: 0.5,
                 },
            ],
            onChapterExit: 
            [
            	{
                     layer: 'Part-3',
                     opacity: 1
                 },
                 {
                     layer: 'Part-1',
                     opacity: 1,
                 },
            ]
        },
         {
            id: 'p7',
            alignment: 'full',
            hidden: false,
            title: 'Reflections',
            //image: './path/to/image/source.png',
            description: 'Our journey came to an end, appropriately enough, on Folly Beach. It\'s hard to adequately explain my purpose or motivations for embarking on this trip and I like how, in a way, the name of our final destination gives nod to that. I wanted to travel and see more of the country. Doing so by bicycle provided a physical challenge, as well as forcing me to slow down and appreciate many of the places that I could have sped through without stopping if using another mode of transportaion. I loved getting to see a wide variety of landscapes and ecosystems and we stopped often to explore trails and parks of various types. We stopped also in dozens of small towns along the way, and in a handful of our nation\'s biggest cities. I was always impressed by the number of interesting, friendly people we met from all walks of life. We shared meals and conversation with oil workers in Louisiana, with a rabbi in Utah, an astronomer in Texas, a policeman in California, the list goes on. All in all, an excellent trip!',
            location: {
                center: [-97.45054, 37.54865],
                zoom: 3.23,
                pitch: 35,
                bearing: 0
            },
            marker: {
                center: [0, 0],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                 //{
                 //    layer: 'Part-2',
                 //    opacity: 1
                 // }
            ]
        },
    ]
};
