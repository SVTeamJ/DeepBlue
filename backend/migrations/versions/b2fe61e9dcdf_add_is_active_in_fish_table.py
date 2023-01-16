"""add is_active in fish table

Revision ID: b2fe61e9dcdf
Revises: 
Create Date: 2023-01-15 12:03:53.350646

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b2fe61e9dcdf'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    """
    fish table에 is_active 컬럼 추가
    :return: None
    """
    op.add_column('fish',
        sa.Column('is_active', sa.Boolean(), nullable=False, default=True)
    )



def downgrade() -> None:
    pass
