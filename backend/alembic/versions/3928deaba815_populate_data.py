"""populate data

Revision ID: 3928deaba815
Revises: 
Create Date: 2023-01-20 11:36:44.234410

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '3928deaba815'
down_revision = None
branch_labels = None
depends_on = None

def upgrade() -> None:
    # create a fish table
    fish_table =op.create_table('fish',
        sa.Column('fish_id', mysql.INTEGER(), autoincrement=True, nullable=False),
        sa.Column('fish_type', mysql.VARCHAR(length=64), nullable=False),
        sa.Column('toxicity', mysql.VARCHAR(length=16), nullable=False),
        sa.Column('open_season', mysql.VARCHAR(length=64), nullable=False),
        sa.Column('closed_season', mysql.VARCHAR(length=64), nullable=False),
        sa.Column('description', mysql.VARCHAR(length=255), nullable=False),
        sa.Column('fish_url', mysql.VARCHAR(length=100), nullable=False),
        sa.Column('created_at', mysql.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'),
                  nullable=True),
        sa.Column('updated_at', mysql.TIMESTAMP(),
                  server_default=sa.text('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), nullable=True),
        sa.Column('is_active', mysql.TINYINT(display_width=1), autoincrement=False, nullable=False),
        sa.PrimaryKeyConstraint('fish_id'),
        mysql_collate='utf8mb4_0900_ai_ci',
        mysql_default_charset='utf8mb4',
        mysql_engine='InnoDB'
    )

    # populate some fish data
    op.bulk_insert(fish_table,[
    {'fish_type': 'mackerel',
    'toxicity': 'toxic',
    'open_season': 'january~december', 'closed_season': 'jan~dec',
    'description': 'some description',
    'fish_url': 'https://www.google.com',
    'is_active': 1},
    ]
    )


def downgrade() -> None:
    # drop table
    op.drop_table('fish')