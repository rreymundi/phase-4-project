puts "🌱 Seeding data..."

    User.create(
        username: "raul",
        password: "123"
    )

    User.create(
        username: "gabi",
        password: "123"
    )

    Project.create(
        name: "Support dev",
        description: "This board keeps track of bugs flagged by our community."
    )

    Project.create(
        name: "Outreach team",
        description: "This board keeps track of ongoing and upcoming work."
    )

    Task.create(
        user_id: 1,
        project_id: 2,
        name: "Images not loading on some pages",
        description: "Some images are not loading on the latest version of Chrome",
        status: "new",
        priority: "medium"
    )

    Task.create(
        user_id: 1,
        project_id: 2,
        name: "Direct messages not working",
        description: "Some users report DMs are not working on iOS.",
        status: "new",
        priority: "high"
    )

    Task.create(
        user_id: 2,
        project_id: 2,
        name: "Admin permissions request",
        description: "Can someone grant our new teammate admin permissions?",
        status: "new",
        priority: "high"
    )

    Task.create(
        user_id: 2,
        project_id: 3,
        name: "Admin permissions request",
        description: "Can someone grant our new teammate admin permissions?",
        status: "new",
        priority: "high"
    )


puts "✅ Done seeding!"