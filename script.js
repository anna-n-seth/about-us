    const staffMembers = [
      {
        name: "Lance Logue",
        role: "Lead Pastor",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Flance_fkwefw.jpg?alt=media&token=35c78bb3-22f4-4ff3-a396-0dd6a4728471",
        bio: "Lance has been in ministry for 25 years, serving in two churches during that time. He has been at hbc since 2022. He loves his wife and loves hanging out with his kids. As a family, they enjoy going to rodeos, movies and baseball games. Lance likes fishing, golfing, and hunting (though he does more hiking in the woods than actual hunting). Lance is excited to be serving at hbc and looks forward to what the Lord is going to do in this community and around the world through hbc."
      },
      {
        name: "Mike McIntosh",
        role: "Admin & Discipleship",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fmike_fq5fff.jpg?alt=media&token=eefc7177-a183-4ec7-8d8c-36324851f926",
        bio: "Mike was born in Baker, Oregon, and moved to Central Oregon 57 years ago. He has been married to Joanna for 38 years, and is a proud father of three wonderful adult children with four granddaughters and two grandsons. Mike worked in the Public School system for 32 years as a teacher and administrator. He served as the Superintendent of Redmond Public Schools for 8 years, prior to retirement and now serves at hbc as the Admin & Discipleship Pastor. He is passionate about draft horses and enjoys time with his family on a small farm located in Terrebonne."
      },
      {
        name: "Michael Kuhlman",
        role: "Worship Pastor",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fmichael_n1jb3d.jpg?alt=media&token=1e651697-75f5-4b04-ae90-747c0366d632",
        bio: "Having served in Worship Ministry for over 30 years, Michael is passionate about inspiring God’s people to worship Him from the depths of their hearts. He has been a Worship Pastor at hbc since 2019, and is married to Kristin, the love of his life, with whom he has raised four adult children—Mandie, Jeff, Emma, and Josh."
      },
      {
        name: "Yalid Fuentes",
        role: "Highland en Español Pastor",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fyalid_p7nyc2.jpg?alt=media&token=96ec136e-5612-4d8d-bbe1-38883a8c08dc",
        bio: "Yalid Fuentes has been the pastor of Highland en Español since 2017. He is passionate about planting churches and nurturing loving, community-oriented environments where people passionately embrace Jesus, serve others, and thrive together."
      },
      {
        name: "Abby Spence",
        role: "Children's Ministry Director",
        photo: "https://res.cloudinary.com/dm3cci7pp/image/upload/v1751436377/Highland-Baptist-Church-Black_ekvao1.png",
        bio: "Bio coming soon..."
      },
      {
        name: "Luke Hannay",
        role: "Youth Pastor",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2FLuke_f5kewb.jpg?alt=media&token=939723fc-80c8-4a0a-9412-477d99397e33",
        bio: "Luke has been the Youth Director of Highland Baptist Church since 2023. He loves working with students and talking about his faith. He and his wife Sarah enjoy weightlifting, hiking, the beach, baking, and spending time with people."
      },
      {
        name: "Danielle Benz",
        role: "Kids@hbc Coordinator",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fdanielle_s0acj4.jpg?alt=media&token=94403423-c934-42b4-b01f-2370890c958d",
        bio: "Danielle is new to the hbc staff, but not to ministry. She loves serving the women of hbc by providing places to learn, grow, and study God’s word. She is passionate about mentorship and connecting women in meaningful ways."
      },
      {
        name: "Kristin Kuhlman",
        role: "Admin Assistant",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fkristin_ovllff.jpg?alt=media&token=11fa611d-0f8d-455b-8f1a-52b27e80c70e",
        bio: "Kristin has called Redmond home since 2005 and joined the hbc team in January 2020. She has partnered with her husband and best friend, Michael, in ministry the past 30 years. Kristin is an outgoing people person who loves meeting new people on Sunday mornings and is passionate about helping them feel warmly welcomed and find connection at hbc. She also enjoys spending time with her husband, adult children, and grandchildren any chance she gets!"
      },
      {
        name: "Jesse Cole",
        role: "Tech",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fjesse_qssmse.jpg?alt=media&token=3f015718-234c-491c-a9f7-d5d3164be42b",
        bio: "Jesse loves his family and everything music-related. He likes being outdoors, reading books, and diving deep into theology. He is passionate about seeking to learn and grow as God leads him."
      },
      {
        name: "Erica Dodd",
        role: "Ministry Assistant",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Ferica_qbqypk.jpg?alt=media&token=7fe29d3c-6c72-4645-a1f9-132f3b84abbd",
        bio: "Erica has worked as a ministry assistant at hbc since September of 2021. She feels blessed to support our staff and show Christ's love to the Redmond community by assisting with their needs. Spending time in the yard and hanging out with her adult daughter are two of Erica’s favorite things."
      },
      {
        name: "Maria Carne",
        role: "Ministry Assistant",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fmaria_rzdwi6.jpg?alt=media&token=4d2d3573-854f-4f0f-9ee9-5a619bcfa2b7",
        bio: "Maria has been with hbc as a receptionist/ministry assistant since June of 2007. She counts it a blessing and honor to greet all who call or come into the office, as well as supporting the hbc staff, church family, and community. Being Auntie M and Granmaria fills her heart with great joy."
      },
      {
        name: "Melody Boyd",
        role: "Ministry Assistant",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fmelody_mur1ye.jpg?alt=media&token=8013123a-9ce0-4670-8d38-16783ee6e31b",
        bio: "Melody was born on the coast in North Bend, Oregon, and loves adventuring alongside her husband, Mark, to whom she has been married for 41 years. Melody has been on staff at hbc since June of 2021 doing publications and helping in a variety of ways. She has also been the Clerk/Treasurer/Office Manager for High Desert Baptist Association for almost 20 years, and is the treasurer for The Rode House, a Biker Church in Bend, Oregon. Melody and Mark are involved in hbc’s worship ministry, along with their son, Ryan, and have been involved in worship ministry for 20+ years."
      },
      {
        name: "James McIntosh",
        role: "Building Superintendent",
        photo: "https://firebasestorage.googleapis.com/v0/b/hbc-website-8b832.firebasestorage.app/o/Staff%2Fjames_i2svbf.jpg?alt=media&token=2552afef-9cb3-4e78-ac1d-f9b0b409cac3",
        bio: "Born in Redmond. Married to Ashley. Loves driving horses."
      }
      
    ];

    const grid = document.getElementById('staffGrid');

    staffMembers.forEach(member => {
      const card = document.createElement('div');
      card.className = 'staff-card';
      card.innerHTML = `
        <img src="${member.photo}" alt="${member.name}" />
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      `;
      card.addEventListener('click', () => openPanel(member.name, member.role, member.photo, member.bio));
      grid.appendChild(card);
    });

    function openPanel(name, role, photo, bio) {
      document.getElementById('panelName').textContent = name;
      document.getElementById('panelRole').textContent = role;
      document.getElementById('panelPhoto').src = photo;
      document.getElementById('panelBio').textContent = bio;

      document.getElementById('overlay').style.display = 'block';
      document.getElementById('panel').classList.add('open');
    }

    function closePanel() {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('panel').classList.remove('open');
    }
