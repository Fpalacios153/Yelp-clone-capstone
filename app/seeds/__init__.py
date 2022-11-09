from flask.cli import AppGroup

from app.seeds.business import seed_businesses, undo_businesses
from app.seeds.category import seed_category, undo_category
from app.seeds.favJoinTable import seed_join_tables, undo_join_tables
from app.seeds.review import seed_reviews, undo_reviews
from .users import seed_users, undo_users

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_businesses()
    seed_reviews()
    seed_join_tables()
    seed_category()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_businesses()
    undo_reviews()
    undo_join_tables()
    undo_category()
    # Add other undo functions here
