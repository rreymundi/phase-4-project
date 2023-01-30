puts "🗑️ Clearing old data..."
    Project.destroy_all
    Task.destroy_all

puts "🌱 Seeding data..."
    
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
        priority: "high",
        saved: false,
    )


puts "✅ Done seeding!"